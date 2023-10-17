"use client";
import theme from "@/theme";
import AtomButton from "../../atoms/AtomButton";
import AtomIcon from "@/components/atoms/AtomIcon";

const ToggleTheme = () => {
  const [key] = theme?.use?.() ?? [];
  return (
    <AtomButton
      astype="solid"
      onClick={() => {
        theme.toggle();
      }}
    >
      {key === "light" ? (
        <AtomIcon astheme="light" icon="moon" />
      ) : (
        <AtomIcon astheme="light" icon="sun" />
      )}
    </AtomButton>
  );
};

export default ToggleTheme;
