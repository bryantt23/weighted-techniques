const techniques = [
    { category: "Basic Techniques", name: "Empathy", weight: 1 },
    { category: "Basic Techniques", name: "Agenda Setting", weight: 1 },
    { category: "Basic Techniques", name: "Identify the Distortions", weight: 1 },
    { category: "Basic Techniques", name: "Straightforward Technique", weight: 7 },
    { category: "Compassion-Based Techniques", name: "Double Standard Technique", weight: 7 },
    { category: "Truth-Based Techniques", name: "Examine the Evidence", weight: 7 },
    { category: "Truth-Based Techniques", name: "Experimental Technique", weight: 1 },
    { category: "Truth-Based Techniques", name: "Survey Technique", weight: 1 },
    { category: "Truth-Based Techniques", name: "Reattribution", weight: 1 },
    { category: "Logic-Based Techniques", name: "Socratic Method", weight: 7 },
    { category: "Logic-Based Techniques", name: "Thinking in Shades of Gray", weight: 7 },
    { category: "Semantic Techniques", name: "Semantic Method", weight: 7 },
    { category: "Semantic Techniques", name: "Let's Define Terms", weight: 7 },
    { category: "Semantic Techniques", name: "Be Specific", weight: 7 },
    { category: "Quantitative Techniques", name: "Self-Monitoring", weight: 1 },
    { category: "Quantitative Techniques", name: "Negative Practice / Worry Breaks", weight: 7 },
    { category: "Humor-Based Techniques", name: "Paradoxical Magnification", weight: 7 },
    { category: "Humor-Based Techniques", name: "Shame-Attacking Exercises", weight: 1 },
    { category: "Role-Playing Techniques", name: "Externalization of Voices", weight: 1 },
    { category: "Role-Playing Techniques", name: "Feared Fantasy Technique", weight: 1 },
    { category: "Philosophical / Spiritual Techniques", name: "Acceptance Paradox", weight: 1 },
    { category: "Visual Imaging Techniques", name: "Time Projection", weight: 1 },
    { category: "Visual Imaging Techniques", name: "Humorous Imaging", weight: 1 },
    { category: "Visual Imaging Techniques", name: "Cognitive Hypnosis", weight: 1 },
    { category: "Uncovering Techniques", name: "Individual Downward Arrow", weight: 1 },
    { category: "Uncovering Techniques", name: "Interpersonal Downward Arrow", weight: 1 },
    { category: "Uncovering Techniques", name: "What-If Technique", weight: 1 },
    { category: "Uncovering Techniques", name: "Hidden Emotion Technique", weight: 7 },
    { category: "Motivational Techniques", name: "Straightforward and Paradoxical Cost-Benefit Analysis (CBA)", weight: 1 },
    { category: "Motivational Techniques", name: "Devil's Advocate", weight: 1 },
    { category: "Motivational Techniques", name: "Stimulus Control", weight: 1 },
    { category: "Motivational Techniques", name: "Decision-Making Form", weight: 1 },
    { category: "Motivational Techniques", name: "Daily Activity Schedule", weight: 1 },
    { category: "Motivational Techniques", name: "Pleasure Predicting Sheet", weight: 1 },
    { category: "Motivational Techniques", name: "Anti-Procrastination Sheet", weight: 1 },
    { category: "Classical Exposure Techniques", name: "Gradual Exposure and Flooding", weight: 1 },
    { category: "Classical Exposure Techniques", name: "Response Prevention", weight: 1 },
    { category: "Classical Exposure Techniques", name: "Distraction", weight: 1 },
    { category: "Cognitive Exposure Techniques", name: "Cognitive Flooding", weight: 7 },
    { category: "Cognitive Exposure Techniques", name: "Image Substitution", weight: 1 },
    { category: "Cognitive Exposure Techniques", name: "Memory Rescripting", weight: 7 },
    { category: "Interpersonal Exposure Techniques", name: "Smile and Hello Practice", weight: 1 },
    { category: "Interpersonal Exposure Techniques", name: "David Letterman Technique", weight: 1 },
    { category: "Interpersonal Exposure Techniques", name: "Self-Disclosure", weight: 1 },
    { category: "Interpersonal Exposure Techniques", name: "Flirting Training", weight: 1 },
    { category: "Interpersonal Exposure Techniques", name: "Rejection Practice", weight: 1 },
    { category: "Interpersonal Techniques", name: "Relationship Cost-Benefit Analysis (CBA)", weight: 1 },
    { category: "Interpersonal Techniques", name: "Revise Your Communication Style", weight: 1 },
    { category: "Interpersonal Techniques", name: "Five Secrets of Effective Communication", weight: 1 },
    { category: "Interpersonal Techniques", name: "One-Minute Drill", weight: 1 },
    { category: "Misc", name: "Havening", weight: 10 },
    { category: "Misc", name: "Belly Breath", weight: 10 },
    { category: "Misc", name: "Count Thoughts", weight: 10 },
    { category: "Misc", name: "Embrace Thoughts", weight: 10 },
    { category: "Misc", name: "Feel Thoughts in My Body", weight: 10 },
    { category: "Misc", name: "Z Point Erase the Tape", weight: 10 },
    { category: "Misc", name: "Be Set Free Fast", weight: 10 },
    { category: "Misc", name: "Visualize as Colors", weight: 10 },
    { category: "Misc", name: "Write It Down", weight: 10 },
    { category: "Misc", name: "Thinking Time (Eckhart Voice)", weight: 10 },
    { category: "Misc", name: "Breathe & Feel & Think", weight: 10 },
    { category: "Misc", name: "Label Thoughts", weight: 10 },
    { category: "Misc", name: "Sedona Method", weight: 10 },
    { category: "Misc", name: "Question Thoughts", weight: 10 },
    { category: "Misc", name: "Daily Mood Log", weight: 10 }
];

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

let allItemsSampled

function shuffleItems() {
    allItemsSampled = weightedRandomSamplingUntilEmpty(techniques.slice());
    console.log("🚀 ~ shuffleItems ~ allItemsSampled:", allItemsSampled)
}

const pageSize = 30
let curPos = 0;
const moreTechniques = document.querySelector(".more"), reset = document.querySelector(".reset"), ul = document.querySelector('.techniques')

moreTechniques.addEventListener("click", getMoreTechniques)

reset.addEventListener("click", resetTechniques)

function getMoreTechniques() {
    const endPos = Math.min(curPos + pageSize, techniques.length)
    for (let i = curPos; i < endPos; i++) {
        const li = document.createElement("li")
        li.textContent = i + " " + allItemsSampled[i].name
        ul.appendChild(li)
    }
    curPos = endPos
}

function resetTechniques() {
    ul.innerHTML = ""
    shuffleItems()
    curPos = 0
    getMoreTechniques()

}

resetTechniques()