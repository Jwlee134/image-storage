import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: IProps) => {
  const el = document.getElementById("modal");
  return el ? ReactDOM.createPortal(children, el) : null;
};

export default ModalPortal;
