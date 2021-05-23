import Modal from "react-modal";
import {
  Container,
  TransactionTypeContainer,
  TypeButton,
  ValueContainer,
} from "./styles";
import { FaTimes, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { TransactionsContext } from "../../TransactionsContext";
import { IconContext } from "react-icons";
import { useState, FormEvent, useContext } from "react";
import { IconSection } from "./IconsSection";
import { api } from "../../services/api";

interface NewTransactionModalprops {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalprops) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    createTransaction({
      title,
      value,
      category,
      type,
    });
  }

  function updateCategory(typeCategory: string) {
    if (typeCategory === category) {
      setCategory("");
    } else {
      setCategory(typeCategory);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <Container onSubmit={handleCreateNewTransaction}>
        <IconContext.Provider value={{ color: "white", size: "1.3rem" }}>
          <button
            type="button"
            className="close-button"
            onClick={onRequestClose}>
            <FaTimes />
          </button>
        </IconContext.Provider>
        <h2>Register new transaction</h2>

        <input
          type="text"
          placeholder="Item"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ValueContainer>
          <input
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <span>£</span>
        </ValueContainer>

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            isActive={type === "income"}
            activeColor="green"
            onClick={() => {
              if (type === "income") {
                setType("");
              } else {
                setType("income");
              }
            }}>
            <IconContext.Provider value={{ color: "#1ad442", size: "1.5rem" }}>
              <FaArrowCircleUp />
            </IconContext.Provider>
            <span>Income</span>
          </TypeButton>

          <TypeButton
            type="button"
            isActive={type === "expense"}
            activeColor="red"
            onClick={() => {
              if (type === "expense") {
                setType("");
              } else {
                setType("expense");
              }
            }}>
            <IconContext.Provider value={{ color: "#d96a59", size: "1.5rem" }}>
              <FaArrowCircleDown />
            </IconContext.Provider>
            <span>expense</span>
          </TypeButton>
        </TransactionTypeContainer>
        <IconSection category={category} handleUpdate={updateCategory} />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
