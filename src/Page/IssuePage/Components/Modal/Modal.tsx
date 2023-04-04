import ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  passShowModal: boolean;
  passShowModalHandler: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const Modal = ({
  passShowModal,
  passShowModalHandler,
  children,
}: ModalProps) => {
  return (
    <Container Show={passShowModal}>
      <Backdrop />
      <ModalContainer>
        <Exit
          onClick={() => {
            passShowModalHandler(false);
          }}
        >
          <div className="line one"></div>
          <div className="line two"></div>
        </Exit>
        <div>{children}</div>
      </ModalContainer>
    </Container>
  );
};

export const ModalPortal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <Modal
      passShowModal={props.passShowModal}
      passShowModalHandler={props.passShowModalHandler}
    >
      {props.children}
    </Modal>,
    document.getElementById("modal")!
  );
};

const Container = styled.div<{ Show: boolean }>`
  position: fixed;
  display: ${(props) => (props.Show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(44, 51, 51, 0.75);
`;
const ModalContainer = styled.div`
  padding: 50px;
  background: #e9f8f9;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

const Exit = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 13px;
  cursor: pointer;
  .line {
    background: black;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 12px;
  }
  .one {
    transform: rotate(-45deg);
  }
  .two {
    transform: rotate(45deg);
  }
`;
