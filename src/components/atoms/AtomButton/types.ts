type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AtomButtonProps = Button & {
  astype?: "solid" | "outline";
};
