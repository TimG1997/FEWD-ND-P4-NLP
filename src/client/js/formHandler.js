const textToAnalyzeField = document.getElementById('text-to-analyze');

export const handleSubmit = (event) => {
    event.preventDefault();
    const textToAnalyze = textToAnalyzeField.value;
    Client.analyzeText(textToAnalyze);
};




