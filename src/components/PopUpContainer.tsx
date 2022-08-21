import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colorset } from "utils/styles";

const StyledModal = styled(Modal)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ModalContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 350px;
  max-height: 500px;
  border-radius: 8px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
    border: none;
  }
`;

const ModalContent = styled.div`
  padding: 0 20px;
  border-radius: 20px;
  overflow: auto;
  background-color: ${colorset.white};
`;

export interface PopUpProps {
  open: boolean;
  onClose: () => void;
}

interface PopUpContainerProps extends PopUpProps {
  children?: React.ReactNode;
}

const PopUpContainer: React.FC<PopUpContainerProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <StyledModal open={open} onClose={onClose}>
      <ModalContentContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContentContainer>
    </StyledModal>
  );
};

export default PopUpContainer;
