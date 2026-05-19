"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [activeScreenshot, setActiveScreenshot] = useState<Screenshot | null>(
    null,
  );

  useEffect(() => {
    if (!activeScreenshot) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScreenshot(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeScreenshot]);

  return (
    <>
      <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
        {screenshots.map((screenshot) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setActiveScreenshot(screenshot)}
            className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-[#d6a039]/22 bg-[#090202] text-left shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 768px) 31vw, 92vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050202]/94 via-[#050202]/46 to-transparent p-5">
              <h3 className="font-serif text-2xl text-[#fff8df]">
                {screenshot.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {activeScreenshot ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050202]/88 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeScreenshot.title}
          onClick={() => setActiveScreenshot(null)}
        >
          <div className="relative max-h-full max-w-[min(94vw,72rem)]">
            <button
              type="button"
              aria-label="Close screenshot"
              onClick={(event) => {
                event.stopPropagation();
                setActiveScreenshot(null);
              }}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d6a039]/42 bg-[#050202]/82 text-[#f8ead1] backdrop-blur transition hover:border-[#f2c76b] hover:bg-[#7f111b]"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div onClick={(event) => event.stopPropagation()}>
              <Image
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                width={activeScreenshot.width}
                height={activeScreenshot.height}
                sizes="94vw"
                className="h-auto max-h-[88svh] w-auto max-w-full rounded-lg border border-[#d6a039]/28 object-contain shadow-[0_28px_90px_rgba(0,0,0,0.58)]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
