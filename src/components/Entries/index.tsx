import { useContext } from "react";
import { Container } from "./styles";
import { IconContext } from "react-icons";
import { TransactionsContext } from "../../TransactionsContext";
import { EntryIcon } from "./Entry/index";

export function Entries() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div className="grid-container">
        {transactions.map((transaction) => {
          return (
            <div
              className={`transactionItem ${
                transaction.category === "expense"
                  ? "expense-box"
                  : "income-box"
              }`}
              key={transaction.id}>
              <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
                <div className="left">
                  <EntryIcon categoryIcon={transaction.category} />
                  <span>
                    {new Intl.DateTimeFormat("en-UK").format(
                      new Date(transaction.createdAt)
                    )}
                  </span>
                </div>
                <div className="right">
                  <h4>
                    {new Intl.NumberFormat("en-UK", {
                      style: "currency",
                      currency: "GBP",
                    }).format(transaction.value)}
                  </h4>
                  <h3>{transaction.title}</h3>
                </div>
              </IconContext.Provider>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
