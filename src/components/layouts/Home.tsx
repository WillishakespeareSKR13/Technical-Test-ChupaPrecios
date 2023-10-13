import AtomWrapper from "@/components/atoms/AtomWrapper";
import FooterPublic from "@/components/complex/Footers/Public";
import HeaderPublic from "@/components/complex/Headers/Public";
import { css } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
};

const LayoutHome = (props: Props) => {
  const { children } = props;
  return (
    <>
      <HeaderPublic />
      <AtomWrapper
        as="main"
        css={css`
          min-height: 100vh;
        `}
      >
        {children}
      </AtomWrapper>
      <FooterPublic />
    </>
  );
};

export default LayoutHome;
