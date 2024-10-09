import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Correct import for Font Awesome icons
import footerContact from "../../api/footerApi.json";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  // Mapping icons based on the keys in footerContact data
  const footerIcons = {
    phone: <FaPhone />,
    email: <FaEnvelope />,
    address: <FaMapMarkerAlt />
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">
                {footerIcons[icon]}
              </div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright © 2024 chetan | Powered by 
                <NavLink to="/" target="_blank">
                  chetan
                </NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
