const PAGE_SIZE = 3;
const HIGHLIGHTED_CLASS_NAME = "current";

let techniquesWithWeightedRandomization = [];
let curPos = 0;

const moreTechniquesBtn = document.querySelector(".more");
const resetBtn = document.querySelector(".reset");
const techniquesList = document.querySelector('.techniques');

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
    techniquesWithWeightedRandomization = weightedRandomSamplingUntilEmpty(TECHNIQUES.slice());
    console.log("🚀 ~ shuffleItems ~ techniquesWithWeightedRandomization:", techniquesWithWeightedRandomization)
}

function removeHighlighting() {
    const highlightedItems = document.querySelectorAll(`.${HIGHLIGHTED_CLASS_NAME}`);
    highlightedItems.forEach(item => item.classList.remove(HIGHLIGHTED_CLASS_NAME));
}

function getMoreTechniques() {
    const endPos = Math.min(curPos + PAGE_SIZE, techniquesWithWeightedRandomization.length);
    removeHighlighting();
    for (let i = curPos; i < endPos; i++) {
        const { name, description } = techniquesWithWeightedRandomization[i];
        const li = document.createElement("li");
        li.className = HIGHLIGHTED_CLASS_NAME;
        li.innerHTML = `<div>${name}</div>`
        let descriptionShown = false;
        let descriptionElement = null;
        let btn

        const showDescription = () => {
            if (!descriptionElement) {
                descriptionElement = document.createElement("p");
                descriptionElement.className = "description"
                descriptionElement.innerText = description;
            }
            li.appendChild(descriptionElement);
            btn.textContent = "Hide Description";
            descriptionShown = true;
        }

        const hideDescription = () => {
            if (descriptionElement) {
                li.removeChild(descriptionElement);
            }
            btn.textContent = "Show Description";
            descriptionShown = false;
        }

        if (description) {
            btn = document.createElement("button");
            btn.textContent = "Show Description";

            li.appendChild(btn);
            li.addEventListener("click", () => {
                if (descriptionShown) {
                    hideDescription()
                }
                else {
                    showDescription()
                }
            })
        }
        techniquesList.prepend(li);
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

resetTechniques();  // Initialize the page with techniques
