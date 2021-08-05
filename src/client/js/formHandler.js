const textToAnalyzeField = document.getElementById('text-to-analyze');

export const handleSubmit = (event) => {
    event.preventDefault();
    const textToAnalyze = textToAnalyzeField.value;
    alert(textToAnalyze);
    if (!textToAnalyze) {
        alert("Please enter text or a valid url!")
    } else {
        Client.analyzeText(textToAnalyze);
    }

};




