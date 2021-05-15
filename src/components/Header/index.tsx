import logoImg from "../../assets/android-chrome-192x192.png";
import { Container, Segment, Totals } from "./styles";
import { FaMoneyBill, FaHandHoldingUsd } from "react-icons/fa";
import { IconContext } from "react-icons";

export function Header() {
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
              <span>£</span>12.000
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
              <span>£</span>8.000
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
              <span style={{ color: "#1ad442" }}>£</span>4.000
            </strong>
          </IconContext.Provider>
        </div>
      </Totals>
    </Container>
  );
}
