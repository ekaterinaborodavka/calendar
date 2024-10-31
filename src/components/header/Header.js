import "./header.css";
import { navigation } from "../../constants";

export const Header = () => {
  return (
    <header className="header">
      <p className="logo">LOGO</p>
      <nav className="navigation">
        <ul className="navigation_list">
          {navigation.map((item, index) => (
            <li key={index} className={`navigation_list_item ${item.title === "Calendar" ? "current" : ""}`}>
              <a href="/">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
