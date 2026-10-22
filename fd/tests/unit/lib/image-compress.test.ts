import { describe, expect, it } from "vitest";

import {
  PROVIDER_IMAGE_LIMIT_BYTES,
  needsCompression,
  targetDimensions,
} from "@/lib/admin/image-compress";

function file(size: number, type: string): File {
  return new File([new ArrayBuffer(size)], "photo", { type });
}

describe("needsCompression", () => {
  it("flags only files above the provider's per-image cap", () => {
    expect(
      needsCompression(file(PROVIDER_IMAGE_LIMIT_BYTES, "image/jpeg")),
    ).toBe(false);
    expect(
      needsCompression(file(PROVIDER_IMAGE_LIMIT_BYTES + 1, "image/jpeg")),
    ).toBe(true);
  });

  it("never touches animated GIFs, even over the cap", () => {
    expect(
      needsCompression(file(PROVIDER_IMAGE_LIMIT_BYTES + 1, "image/gif")),
    ).toBe(false);
  });
});

describe("targetDimensions", () => {
  it("keeps small images as-is", () => {
    expect(targetDimensions(800, 600, 2400)).toEqual({
      height: 600,
      width: 800,
    });
  });

  it("scales landscape photos down to the max edge, preserving aspect ratio", () => {
    // 4000×3000 phone photo → 2400×1800
    expect(targetDimensions(4000, 3000, 2400)).toEqual({
      height: 1800,
      width: 2400,
    });
  });

  it("scales portrait photos by their long edge too", () => {
    expect(targetDimensions(3000, 5000, 2400)).toEqual({
      height: 2400,
      width: 1440,
    });
  });
});
