import React from "react";
import styled from "styled-components";

import ButtonImage from "../images/close-button.png";
import CloseIcon from "../images/close-icon.png";

function CloseButton(props) {
  const { isOpen, onClick } = props;
  return (
    <Wrapper className="closeButton" isOpen={isOpen}>
      <Image src={ButtonImage} alt="close-button" />
      {isOpen && <Icon onClick={onClick} src={CloseIcon} alt="close-icon" />}
    </Wrapper>
  );
}

export default CloseButton;

const Wrapper = styled.div`
  position: absolute;
  width: 91px;
  height: 113px;
  z-index: 2;
`;

const Image = styled.img`
  width: 91px;
  height: 113px;
  margin: 0;
`;

const Icon = styled.img`
  position: absolute;
  top: 36px;
  left: 36px;
  margin: auto;
  transform: scale(0.5);
  cursor: pointer;
`;
