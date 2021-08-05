const txtToAnalyzeField = document.getElementById('text-to-analyze');

export const handleSubmit = (event, textToAnalyzeField = txtToAnalyzeField) => {
    event.preventDefault();
    const textToAnalyze = textToAnalyzeField.value;
    if (!textToAnalyze || textToAnalyze === "") {
        alert("Please enter text or a valid url!")
    } else {
        Client.analyzeText(textToAnalyze);
    }

};




