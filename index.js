const PAGE_SIZE = 3;
const HIGHLIGHTED_CLASS_NAME = "current";

let techniquesWithWeightedRandomization = [];
let curPos = 0;
let bottomElement = null

const moreTechniquesBtn = document.querySelector(".more");
const resetBtn = document.querySelector(".reset");
const techniquesList = document.querySelector('.techniques');
let loadedTechniques = [];

function weightedRandomSamplingUntilEmpty(items) {
    let results = [];
    let totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

    while (items.length > 0) {
        let threshold = Math.random() * totalWeight;
        let cumulativeWeight = 0;

        for (let i = 0; i < items.length; i++) {
            cumulativeWeight += items[i].weight;
            if (cumulativeWeight >= threshold) {
                results.push(items[i]);
                totalWeight -= items[i].weight;
                items.splice(i, 1); // Remove the item from the array
                break;
            }
        }
    }

    return results;
}

function shuffleItems() {
    techniquesWithWeightedRandomization = weightedRandomSamplingUntilEmpty(loadedTechniques.slice());
    console.log("🚀 ~ shuffleItems ~ loadedTechniques:", loadedTechniques)
    console.log("🚀 ~ shuffleItems ~ techniquesWithWeightedRandomization:", techniquesWithWeightedRandomization)
}

function removeHighlighting() {
    const highlightedItems = document.querySelectorAll(`.${HIGHLIGHTED_CLASS_NAME}`);
    highlightedItems.forEach(item => item.classList.remove(HIGHLIGHTED_CLASS_NAME));
}

function scrollToPageBottom() {
    bottomElement.scrollIntoView({ behavior: "smooth" })
}

function getMoreTechniques() {
    const endPos = Math.min(curPos + PAGE_SIZE, techniquesWithWeightedRandomization.length);
    removeHighlighting();
    for (let i = curPos; i < endPos; i++) {
        const { name, description } = techniquesWithWeightedRandomization[i];
        const li = document.createElement("li");
        li.className = HIGHLIGHTED_CLASS_NAME;
        li.innerHTML = `<div>${name}</div>`

        if (description) {
            const btn = document.createElement("button");
            btn.className = "toggle-btn"
            btn.textContent = "Show Description";
            li.classList.add("toggle")

            const descriptionElement = document.createElement("p");
            descriptionElement.className = "description"
            descriptionElement.innerText = description;

            // not shown by default
            descriptionElement.style.display = 'none'
            li.appendChild(descriptionElement)
            li.appendChild(btn);
        }
        techniquesList.append(li);

        if (i === endPos - 1) {
            bottomElement = li;
            scrollToPageBottom()
        }
    }
    curPos = endPos;
}

function resetTechniques() {
    techniquesList.innerHTML = "";
    shuffleItems();
    curPos = 0;
    getMoreTechniques();
}

moreTechniquesBtn.addEventListener("click", getMoreTechniques);
resetBtn.addEventListener("click", resetTechniques);

async function fetchFromAPI() {
    try {
        const response = await fetch("https://thought-techniques-api-git-main-bryantt23s-projects.vercel.app/techniques")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        console.log("Data fetched from API:", data);
        localStorage.setItem("techniques", JSON.stringify(data)); // Cache new data
        return data
    } catch (error) {
        console.error("Error fetching from API:", error);
        throw error;  // Re-throw to handle it in the main logic or another helper
    }
}

function fetchFromLocalStorage() {
    try {
        const storedData = localStorage.getItem("techniques")
        if (!storedData) {
            throw new Error("No data found in local storage")
        }
        return JSON.parse(storedData)
    } catch (error) {
        console.error("Error fetching from local storage:", error);
        throw error;  // Re-throw to handle it in the main logic
    }
}

async function fetchTechniques() {
    try {
        return await fetchFromAPI()
    }
    catch (apiError) {
        try {
            return fetchFromLocalStorage()
        } catch (localStorageError) {
            throw new Error("No techniques available offline or online.");
        }
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    loadedTechniques = await fetchTechniques()
    techniquesList.addEventListener("click", function (event) {
        let curElement = event.target;

        // traverse up to find element with target class
        while (curElement && !curElement.classList?.contains("toggle")) {
            curElement = curElement.parentNode;
        }

        if (curElement?.classList.contains("toggle")) {
            const descriptionElement = curElement.querySelector(".description")
            if (descriptionElement) {
                const isHidden = descriptionElement.style.display === 'none'
                descriptionElement.style.display = isHidden ? "block" : "none"

                const btn = curElement.querySelector(".toggle-btn")
                if (btn) {
                    btn.textContent = isHidden ? "Hide Description" : "Show Description"
                }
            }
        }
    })

    resetTechniques();  // Initialize the page with techniques
})