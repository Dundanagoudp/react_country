import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Correct import for Font Awesome icons
import footerContact from "../../api/footerApi.json";

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
                {footerIcons[icon] || null} {/* Dynamically render icon based on the 'icon' field */}
              </div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}

      </div>

      
    </footer>
  );
};
