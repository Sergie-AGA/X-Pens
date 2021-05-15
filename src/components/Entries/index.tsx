import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { IconContext } from "react-icons";
import { EntryIcon } from "./Entry/index";

interface Transaction {
  id: number;
  title: string;
  value: number;
  category: string;
  createdAt: string;
}

export function Entries() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
