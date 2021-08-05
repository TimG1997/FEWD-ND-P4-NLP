import {analyzeText} from "../js/analyzeText";
import {describe, expect} from "@jest/globals";

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe("Testing form handler functionality", () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ confidence: 100}),
        })
    );

    test('Check if updateUI is called', () => {
        analyzeText("text to analyze");
        expect(fetch).toHaveBeenCalled();
    });
});
