import Image from "next/image";

export default function ImageFallback() {
  return (
    <Image
      src="/fallback.jpg"
      alt="fallback"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      width={800}
      height={600}
    />
  );
}
