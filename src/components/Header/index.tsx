import logoImg from "../../assets/android-chrome-192x192.png";
import { Container, Segment, Totals } from "./styles";
import { FaMoneyBill, FaHandHoldingUsd } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Header() {
  const { transactions } = useContext(TransactionsContext);

// Example below shows how to handle with reduce, but it would need 3 of the same
//   const totalDeposits = transactions.reduce((acc, transaction) => {
// if (transaction.type === 'expense') {
//   return acc + transaction.value
// } 
// return acc
//   }, 0)

const summary = transactions.reduce((acc, transaction) => {

if (transaction.type ==="expense") {
acc.expense += transaction.value
acc.total -= transaction.value
} else {
  acc.income += transaction.value
  acc.total += transaction.value
}
 return acc
}, {
  expense: 0,
  income: 0,
  total: 0,
})

  return (
    <Container>
      <Segment>
        <img src={logoImg} alt="" />
        <h1>X-Pence Finance</h1>
      </Segment>
      <Totals>
        <div>
          <IconContext.Provider value={{ size: "2rem" }}>
            <h2>
              <span>Income</span>
              <FaMoneyBill />
            </h2>
            <strong>
              <span>£</span> {new Intl.NumberFormat("en-UK", {
                      style: "currency",
                      currency: "GBP",
                    }).format(summary.income)}
            </strong>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: "2rem" }}>
            <h2>
              <span>Expenses</span>
              <FaMoneyBill />
            </h2>
            <strong>
              <span>£</span>{new Intl.NumberFormat("en-UK", {
                      style: "currency",
                      currency: "GBP",
                    }).format(summary.expense)}
            </strong>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: "2rem" }}>
            <h2>
              <span>Total</span>
              <FaHandHoldingUsd />
            </h2>
            <strong>
              <span style={{ color: "#1ad442" }}>£</span>{new Intl.NumberFormat("en-UK", {
                      style: "currency",
                      currency: "GBP",
                    }).format(summary.total)}
            </strong>
          </IconContext.Provider>
        </div>
      </Totals>
    </Container>
  );
}
