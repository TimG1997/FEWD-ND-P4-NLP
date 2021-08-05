const resEl = document.getElementById('results');

export const updateUI = (results, textToAnalyze, resultsElement = resEl) => {
    if (results.confidence === undefined) {
        resultsElement.innerHTML = 'Text could not be analyzed.';
    } else {
        resultsElement.innerHTML = `
        <p class="analyzed-text">Analyzed text: ${textToAnalyze}</p>
        <p>Confidence: ${results.confidence}</p>
        <p>Score Tag: ${results.score_tag}</p>
        <p>Subjectivity: ${results.subjectivity}</p>
        <p>Irony: ${results.irony}</p>`
    }
};
