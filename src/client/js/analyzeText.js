const FETCH_OPTIONS = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};
const ANALYZE_TEXT_ENDPOINT = '/analyzeText';

export const analyzeText = (textToAnalyze) => {
    fetch(ANALYZE_TEXT_ENDPOINT, {
        ...FETCH_OPTIONS,
        body: JSON.stringify({textToAnalyze})
    })
        .then(res => res.json())
        .then((res) => {
            Client.updateUI(res, textToAnalyze);
        })
};
