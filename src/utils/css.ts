export const cx = (clases: (string | undefined)[]) => {
  return clases.filter(Boolean).join(" ");
};
