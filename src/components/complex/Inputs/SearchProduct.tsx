"use client";

import AtomInput from "@/components/atoms/AtomInput";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearchProduct = () => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <AtomInput
      ref={ref}
      onKeyDown={(e) => {
        if (e.key !== "Enter") return;
        const value = ref.current?.value;
        if (!value) return;

        router.push(`/busqueda/${value}`);
      }}
      placeholder="Buscar productos"
    />
  );
};

export default InputSearchProduct;
