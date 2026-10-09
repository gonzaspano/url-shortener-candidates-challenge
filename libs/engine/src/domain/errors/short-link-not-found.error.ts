import type { ShortCode } from "../short-link/short-code";
import { DomainError } from "./domain-error";

/**
 * Thrown by the application layer (the ResolveShortLink use case), not by
 * repositories: `ShortLinkRepository.findByCode` returns null when nothing matches.
 */
export class ShortLinkNotFoundError extends DomainError {
  constructor(readonly code: ShortCode) {
    super(`Short link "${code.value}" was not found`);
  }
}
