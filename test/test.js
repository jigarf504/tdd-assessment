import { describe } from "mocha";
import assert from "assert";
import add from "../index.js";

describe("String Calculator", () => {
  it("Should return 0 when passing empty string", () => {
    assert.equal(add(""), 0);
  });

  it("Should return 1 when passing '1' string", () => {
    assert.equal(add("1"), 1);
  });

  it("Should return 6 when passing '1,5' string", () => {
    assert.equal(add("1,5"), 6);
  });
  it("Should return 5 when passing '1,2,3,4,5' string", () => {
    assert.equal(add("1,2,3,4,5"), 15);
  });
  it("Should return 6 when passing '1\\n2,3' string", () => {
    assert.equal(add("1\n2,3"), 6);
  });
  it("Should return 10 when passing '1\\2;3;4' string", () => {
    assert.equal(add("1\n2;3;4"), 10);
  });
  it("Should return 15 when passing '//;1\\n2;3;4//5' string", () => {
    assert.equal(add("//;1\n2,3;4//5"), 15);
  });

  it("Should throw exception error when passing negative value", () => {
    assert.throws(() => add("-1,3,5"), /negative numbers not allowed -1/);
  });
  it("Should throw exception error with list of negative number when passing negative values", () => {
    assert.throws(() => add("-1,-3,5"), /negative numbers not allowed -1,-3/);
  });
});
