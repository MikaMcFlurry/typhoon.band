import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicAsset(referencePath: string | string[], fallbackPath: string) {
  const candidates = Array.isArray(referencePath) ? referencePath : [referencePath];

  return (
    candidates.find((candidate) => {
      const normalizedPath = candidate.replace(/^\//, "");
      const absolutePath = join(process.cwd(), "public", normalizedPath);

      return existsSync(absolutePath);
    }) ?? fallbackPath
  );
}
