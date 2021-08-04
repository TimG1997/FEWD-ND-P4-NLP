const resultsElement = document.getElementById('results');

export const updateUI = (results, textToAnalyze) => {
    if (results.confidence === undefined) {
        resultsElement.innerHTML = `
        Text could not be analyzed. 
        (Error code: ${results.status.code}, 
        Error Message:"${results.status.msg}")`;
    } else {
        console.log(results);
        const textToAnalyzeParagraph = document.createElement('p');
        textToAnalyzeParagraph.classList.add('analyzed-text')
        textToAnalyzeParagraph.innerHTML = `Analyzed text: ${textToAnalyze}`;

        const confidenceParagraph = document.createElement('p');
        confidenceParagraph.innerHTML = `Confidence: ${results.confidence}`;

        const scoreTagParagraph = document.createElement('p');
        scoreTagParagraph.innerHTML = `Score Tag: ${results.score_tag}`;

        const subjectivityParagraph = document.createElement('p');
        subjectivityParagraph.innerHTML = `Subjectivity: ${results.subjectivity}`;

        const ironyParagraph = document.createElement('p');
        subjectivityParagraph.innerHTML = `Irony: ${results.irony}`;

        resultsElement.appendChild(textToAnalyzeParagraph);
        resultsElement.appendChild(confidenceParagraph);
        resultsElement.appendChild(scoreTagParagraph);
        resultsElement.appendChild(subjectivityParagraph);
        resultsElement.appendChild(ironyParagraph);
    }
};
