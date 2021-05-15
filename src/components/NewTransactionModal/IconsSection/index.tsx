import {
  FaHome,
  FaCar,
  FaBriefcase,
  FaBook,
  FaPizzaSlice,
  FaShoppingCart,
  FaStore,
  FaTv,
  FaFirstAid,
  FaGift,
  FaTools,
  FaChartBar,
  FaFileInvoiceDollar,
  FaPalette,
  FaDumbbell,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { IconSelection, CategoryButton } from "./styles";

type IconSectionProps = {
  category: string;
  handleUpdate: (typeCategory: string) => void;
};

export function IconSection({ category, handleUpdate }: IconSectionProps) {
  return (
    <IconSelection>
      <IconContext.Provider value={{ color: "white", size: "2rem" }}>
        <h3>Category</h3>
        <section>
          <CategoryButton
            type="button"
            isActive={category === "house"}
            onClick={() => {
              handleUpdate("house");
            }}>
            <FaHome />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "car"}
            onClick={() => {
              handleUpdate("car");
            }}>
            <FaCar />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "business"}
            onClick={() => {
              handleUpdate("business");
            }}>
            <FaBriefcase />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "book"}
            onClick={() => {
              handleUpdate("book");
            }}>
            <FaBook />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "food"}
            onClick={() => {
              handleUpdate("food");
            }}>
            <FaPizzaSlice />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "shop"}
            onClick={() => {
              handleUpdate("shop");
            }}>
            <FaShoppingCart />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "market"}
            onClick={() => {
              handleUpdate("market");
            }}>
            <FaStore />
          </CategoryButton>
          <CategoryButton
            type="button"
            isActive={category === "entertainment"}
            onClick={() => {
              handleUpdate("entertainment");
            }}>
            <FaTv />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "health"}
            onClick={() => {
              handleUpdate("health");
            }}>
            <FaFirstAid />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "gift"}
            onClick={() => {
              handleUpdate("gift");
            }}>
            <FaGift />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "service"}
            onClick={() => {
              handleUpdate("service");
            }}>
            <FaTools />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "investment"}
            onClick={() => {
              handleUpdate("investment");
            }}>
            <FaChartBar />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "bill"}
            onClick={() => {
              handleUpdate("bill");
            }}>
            <FaFileInvoiceDollar />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "art"}
            onClick={() => {
              handleUpdate("art");
            }}>
            <FaPalette />
          </CategoryButton>

          <CategoryButton
            type="button"
            isActive={category === "exercise"}
            onClick={() => {
              handleUpdate("exercise");
            }}>
            <FaDumbbell />
          </CategoryButton>
        </section>
      </IconContext.Provider>
    </IconSelection>
  );
}
