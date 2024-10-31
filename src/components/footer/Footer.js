import "./footer.css";
import { navigation } from "../../constants";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="logo">LOGO</p>
      <nav className="navigation">
        <ul className="navigation_list">
          {navigation.map((item, index) => (
            <li key={index} className="navigation_list_item">
              <a href="/">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="copy">© 2022 All rights reserved</p>
    </footer>
  );
};
