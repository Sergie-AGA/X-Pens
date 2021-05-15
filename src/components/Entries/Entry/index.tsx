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
  FaQuestion,
} from "react-icons/fa";

interface EntryIconProps {
  categoryIcon: string;
}

export function EntryIcon({ categoryIcon }: EntryIconProps) {
  let icon = <FaQuestion />;

  switch (categoryIcon) {
    case "house":
      icon = <FaHome />;
      break;
    case "car":
      icon = <FaCar />;
      break;
    case "business":
      icon = <FaBriefcase />;
      break;
    case "book":
      icon = <FaBook />;
      break;
    case "food":
      icon = <FaPizzaSlice />;
      break;
    case "shop":
      icon = <FaShoppingCart />;
      break;
    case "market":
      icon = <FaStore />;
      break;
    case "entertainment":
      icon = <FaTv />;
      break;
    case "health":
      icon = <FaFirstAid />;
      break;
    case "gift":
      icon = <FaGift />;
      break;
    case "service":
      icon = <FaTools />;
      break;
    case "investment":
      icon = <FaChartBar />;
      break;
    case "bill":
      icon = <FaFileInvoiceDollar />;
      break;
    case "art":
      icon = <FaPalette />;
      break;
    case "exercise":
      icon = <FaDumbbell />;
      break;
    default:
      break;
  }

  return <>{icon}</>;
}
