import { Container } from "./styles";
import { FaPenSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Button2({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <IconContext.Provider value={{ size: "2.5rem" }}>
        <button
          className="button2"
          type="button"
          onClick={onOpenNewTransactionModal}>
          <FaPenSquare />
        </button>
      </IconContext.Provider>
    </Container>
  );
}
