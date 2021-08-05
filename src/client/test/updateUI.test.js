import {updateUI} from '../js/updateUI';
import {describe, expect} from "@jest/globals";

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe("Testing analyzing text functionality", () => {
    const dom = new JSDOM(`<div id="results"></div>`);
    const textToAnalyze = "Text to analyze";
    const resultsElement = dom.window.document.getElementById('results');
    const results = {confidence: undefined, score_tag: undefined, subjectivity: undefined, irony: undefined};

    test('Check if the UI updates correctly, if no analysis is present', () => {
        updateUI(results, textToAnalyze, resultsElement);
        expect(resultsElement.innerHTML).toBe('Text could not be analyzed.')
    });

    test('Check if the UI updates correctly, when an analysis is present', () => {
        const results = {confidence: "100", score_tag: "P", subjectivity: "SUBJECTIVE", irony: "NONIRONIC"};

        updateUI(results, textToAnalyze, resultsElement);
        expect(resultsElement.innerHTML).toBe(
            `
        <p class="analyzed-text">Analyzed text: Text to analyze</p>
        <p>Confidence: 100</p>
        <p>Score Tag: P</p>
        <p>Subjectivity: SUBJECTIVE</p>
        <p>Irony: NONIRONIC</p>`
        );
    });
});
