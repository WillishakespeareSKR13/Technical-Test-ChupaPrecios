type vbase = {
  base?: string;
};

export const cx = (clases: (string | undefined)[]) => {
  return clases.filter(Boolean).join(" ");
};

export const ct = (boolean: boolean, tr: string, fl?: string) => {
  if (!boolean) return fl ?? "";
  return tr ?? "";
};

export const cv =
  <T extends vbase>(variants: T) =>
  (variant: undefined | keyof T | Partial<Record<keyof T, boolean>>) => {
    const base = variants.base ?? "";

    const isObject = typeof variant === "object";

    if (isObject) {
      const varts = Object.entries(variant as Record<keyof T, boolean>)
        ?.filter(([, value]) => value)
        ?.map(([key]) => variants[key as keyof T]);
      const vartsArray = (varts ?? []) as string[];

      return cx([base, ...vartsArray]);
    } else {
      const varts = variants as Record<keyof T, string>;
      const vart = varts[variant as keyof T] ?? "";
      return cx([base, vart]);
    }
  };
