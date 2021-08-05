import {handleSubmit} from "../js/formHandler";
import {describe, expect} from "@jest/globals";

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe("Testing form handler functionality", () => {
    test('Check if alert is shown', () => {
        window.alert = jest.fn();
        const dom = new JSDOM(`
        <section class="content">
            <form onsubmit="return Client.handleSubmit(event)">
                <label for="text-to-analyze">Enter text:</label>
                <input id="text-to-analyze" type="text" name="input" value="" placeholder="Text or URL">
                <input id="submit-button" type="submit" name="text" value="Analyze" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)">
            </form>
        </section>`);
        handleSubmit(new InputEvent("change"), dom.window.document.getElementById('text-to-analyze'));

        expect(global.alert).toHaveBeenCalled();
        window.alert.mockClear();
    });
});
