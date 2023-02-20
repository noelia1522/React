import React, { useRef } from "react";

type ImageProps = {
  primaryImage: string;
  secondaryImage?: string;
  alt?: string;
};
export default function ImageToggleOnMouseOver({
  primaryImage,
  secondaryImage,
  alt,
}: ImageProps) {
  const imageRef = useRef<any>(null);
  return (
    <img
      style={{ width: "400px" }}
      ref={imageRef}
      src={primaryImage}
      alt={alt}
      onMouseOver={() => {
        if (imageRef.current !== null) imageRef.current.src = secondaryImage;
      }}
      onMouseOut={() => {
        if (imageRef.current !== null) imageRef.current.src = primaryImage;
      }}
    ></img>
  );
}