import { describe, expect, it } from "vitest";
import { chargerPatients, joursEntre } from "../src/donnees.js";

describe("données", () => {
  it("charge les 25 patients fictifs", () => {
    expect(chargerPatients()).toHaveLength(25);
  });

  it("compte les jours entre deux dates", () => {
    expect(joursEntre("2026-10-01", "2026-10-22")).toBe(21);
  });
});
