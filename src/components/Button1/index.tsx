import { FaPenSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Container } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Button1({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <IconContext.Provider value={{ size: "2rem" }}>
        <h3>All transactions:</h3>
        <button type="button" onClick={onOpenNewTransactionModal}>
          <FaPenSquare />
          <span>New Transaction</span>
        </button>
      </IconContext.Provider>
    </Container>
  );
}
