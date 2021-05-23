import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Button1 } from "./components/Button1";
import { GlobalStyle } from "./styles/global";
import { Entries } from "./components/Entries";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header />
      <Button1 onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Entries />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
