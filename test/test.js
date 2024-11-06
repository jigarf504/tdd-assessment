import assert from "assert";
import add from "../index.js";
import { describe } from "mocha";

describe("String Calculator", () => {
    it("Should return 0 when passing empty string", () => {
        assert.equal(add(""),0);
    })
});
