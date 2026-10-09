import { describe, expect, it } from "vitest";
import { ShortCode } from "../short-link/short-code";
import { DomainError } from "./domain-error";
import { ShortCodeAlreadyExistsError } from "./short-code-already-exists.error";
import { ShortLinkNotFoundError } from "./short-link-not-found.error";

const code = ShortCode.create("aaaaaaa");

describe("short link errors", () => {
  it("ShortLinkNotFoundError carries the code", () => {
    const error = new ShortLinkNotFoundError(code);
    expect(error).toBeInstanceOf(DomainError);
    expect(error.name).toBe("ShortLinkNotFoundError");
    expect(error.code.equals(code)).toBe(true);
    expect(error.message).toContain("aaaaaaa");
  });

  it("ShortCodeAlreadyExistsError carries the code", () => {
    const error = new ShortCodeAlreadyExistsError(code);
    expect(error).toBeInstanceOf(DomainError);
    expect(error.name).toBe("ShortCodeAlreadyExistsError");
    expect(error.code.equals(code)).toBe(true);
    expect(error.message).toContain("aaaaaaa");
  });
});
