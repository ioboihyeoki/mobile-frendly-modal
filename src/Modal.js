import { X } from "react-feather";
import styled from "styled-components";
import {
  DialogOverlay,
  DialogContent
} from "@reach/dialog";
/*
  This value is provided for your convenience.
  If you'd like, you can use it in your media
  queries! If you're not sure how to do that,
  you can use a hardcoded value for now.
  We'll learn more about breakpoints in the
  upcoming lessons.
*/
const MOBILE_BREAKPOINT = 550;

function Modal({
  title,
  isOpen,
  handleDismiss,
  children
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content area-label={title}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={handleDismiss}>
            <X />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
        <ChildWrapper>{children}</ChildWrapper>
      </Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 65%;
    height: auto;
  }
`;

const Header = styled.header`
  padding: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
    border-bottom: none;
  }
`;

const CloseButton = styled.button`
  position: static;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: black;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    position: absolute;
    width: 48px;
    height: 48px;
    top: -48px;
    right: 0;
    color: white;
    padding: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const ChildWrapper = styled.div`
  padding: 16px;
`;

export default Modal;
