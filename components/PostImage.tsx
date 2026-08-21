"use client";

import { useEffect, useRef, useState } from "react";

interface PostImageProps {
  src: string;
  alt: string;
}

export default function PostImage({ src, alt }: PostImageProps) {
  const [portrait, setPortrait] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle cached images that are already complete before onLoad fires
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setPortrait(img.naturalHeight > img.naturalWidth);
    }
  }, []);

  function handleLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const img = e.currentTarget;
    setPortrait(img.naturalHeight > img.naturalWidth);
  }

  return (
    <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm bg-white dark:bg-gray-950">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={
          portrait
            ? "absolute inset-0 mx-auto h-full w-auto object-contain"
            : "absolute inset-0 h-full w-full object-cover"
        }
      />
    </div>
  );
}
