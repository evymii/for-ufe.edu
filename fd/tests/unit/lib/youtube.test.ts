import { describe, expect, it } from "vitest";

import {
  isYouTubeThumbUrl,
  parseYouTubeId,
  youTubeThumbUrl,
} from "@/lib/youtube";

describe("parseYouTubeId", () => {
  it("accepts a bare 11-char ID", () => {
    expect(parseYouTubeId("dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
  });

  it("accepts IDs with dashes and underscores", () => {
    expect(parseYouTubeId("aBc_dEf-Ghi")).toBe("aBc_dEf-Ghi");
  });

  it("extracts from watch URLs with extra params", () => {
    expect(
      parseYouTubeId(
        "https://www.youtube.com/watch?v=aBc_dEf-Ghi&t=42s&list=xyz",
      ),
    ).toBe("aBc_dEf-Ghi");
  });

  it("extracts from short youtu.be links", () => {
    expect(parseYouTubeId("https://youtu.be/aBc_dEf-Ghi?si=1")).toBe(
      "aBc_dEf-Ghi",
    );
  });

  it("extracts from shorts links", () => {
    expect(parseYouTubeId("https://www.youtube.com/shorts/aBc_dEf-Ghi")).toBe(
      "aBc_dEf-Ghi",
    );
  });

  it("extracts from embed and nocookie embed links", () => {
    expect(parseYouTubeId("https://www.youtube.com/embed/aBc_dEf-Ghi")).toBe(
      "aBc_dEf-Ghi",
    );
    expect(
      parseYouTubeId("https://www.youtube-nocookie.com/embed/aBc_dEf-Ghi"),
    ).toBe("aBc_dEf-Ghi");
  });

  it("extracts from live links", () => {
    expect(parseYouTubeId("youtube.com/live/aBc_dEf-Ghi?feature=share")).toBe(
      "aBc_dEf-Ghi",
    );
  });

  it("trims surrounding whitespace", () => {
    expect(parseYouTubeId("  dQw4w9WgXcQ\n")).toBe("dQw4w9WgXcQ");
  });

  it("rejects non-YouTube URLs", () => {
    expect(parseYouTubeId("https://vimeo.com/123456789")).toBeNull();
    expect(
      parseYouTubeId("https://example.com/watch?v=aBc_dEf-Ghi"),
    ).toBeNull();
  });

  it("rejects empty, partial and oversized input", () => {
    expect(parseYouTubeId("")).toBeNull();
    expect(parseYouTubeId("   ")).toBeNull();
    expect(parseYouTubeId("dQw4w9Wg")).toBeNull(); // too short
    expect(parseYouTubeId("dQw4w9WgXcQextra")).toBeNull(); // too long
  });
});

describe("youTubeThumbUrl", () => {
  it("builds the standard poster URL per quality", () => {
    expect(youTubeThumbUrl("aBc_dEf-Ghi")).toBe(
      "https://i.ytimg.com/vi/aBc_dEf-Ghi/hqdefault.jpg",
    );
    expect(youTubeThumbUrl("aBc_dEf-Ghi", "maxres")).toBe(
      "https://i.ytimg.com/vi/aBc_dEf-Ghi/maxresdefault.jpg",
    );
    expect(youTubeThumbUrl("aBc_dEf-Ghi", "mq")).toBe(
      "https://i.ytimg.com/vi/aBc_dEf-Ghi/mqdefault.jpg",
    );
  });
});

describe("isYouTubeThumbUrl", () => {
  it("detects generated posters only", () => {
    expect(
      isYouTubeThumbUrl("https://i.ytimg.com/vi/aBc_dEf-Ghi/hqdefault.jpg"),
    ).toBe(true);
    expect(isYouTubeThumbUrl("https://res.cloudinary.com/demo/img.jpg")).toBe(
      false,
    );
    expect(isYouTubeThumbUrl("")).toBe(false);
  });
});
