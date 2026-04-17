"use client";

import Image from "next/image"; // ✅ CORRECT PLACE

export default function ProductCard({ product }: any) {
  return (
    <div>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}
