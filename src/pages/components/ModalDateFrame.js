import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

const ModalFrame = ({ handleModal, children }) => {
  return (
    <ModalPortal>
      <Container>
        <Background onClick={handleModal} />
        <ModalBlock>
          <Close onClick={handleModal} />
          <Contents>{children}</Contents>
        </ModalBlock>
      </Container>
    </ModalPortal>
  );
};

export default ModalFrame;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5px);
  animation: modal-show 200ms;
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 40px;
  background-color: #ffffff;
  width: 900px;
  height: 50vh;
  min-height: 35rem;
  animation: modal-show 100ms;
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 45px;
  right: 40px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  background: url('https://www.stayfolio.com/web/images/btn-close.png')
    no-repeat center;
  background-size: 30px;
  border: none;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
