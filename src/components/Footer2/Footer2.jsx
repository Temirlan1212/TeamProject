import React from "react";
import "./Footer2.css";
import Facebook from "../../assets/imagesFooter/Facebook.png";
import Instagram from "../../assets/imagesFooter/Instagram.png";
import Telegram from "../../assets/imagesFooter/Telegram.png";
import WhatsApp from "../../assets/imagesFooter/WhatsApp.png";
import { Link } from "react-router-dom";

import logo from "../../assets/logo1.png";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";

import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const Footer2 = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <img src={logo} />
          </h3>

          <p class="footer-links">
            <Link className="teg_a" to="/">
              Дом
            </Link>

            <Link className="teg_a" to="/">
              Главная
            </Link>

            <Link className="teg_a" to="/products">
              Товары
            </Link>

            <Link className="teg_a" to="/contacts">
              Контакты
            </Link>

            <Link className="teg_a" to="/aboutus">
              О нас
            </Link>
          </p>

          <p class="footer-company-name">Company Name © 2015</p>
        </div>

        <div class="footer-center" style={{}}>
          <hr style={{ maxWidth: "600px", marginTop: "20px" }}></hr>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <CheckroomIcon sx={{ color: "white", marginRight: "10px" }} />
            <p>
              <span style={{ color: "brown", fontWeight: 700 }}>
                444 S. Cedros Ave
              </span>
            </p>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "5px",
              alignItems: "center",
            }}
          >
            <CallIcon sx={{ color: "white", marginRight: "10px" }} />
            <Link to="/">
              <span style={{ color: "brown" }}>+(996) 771 53 96 10</span>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "5px",
              alignItems: "center",
            }}
          >
            <BusinessIcon sx={{ color: "white", marginRight: "10px" }} />
            <p>
              <Link to="mailto:support@company.com">
                {" "}
                <span style={{ color: "brown", fontWeight: 700 }}>
                  {" "}
                  support@company.com
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <hr style={{ maxWidth: "600px", marginTop: "20px" }}></hr>
          <p class="footer-company-about" style={{ marginTop: "30px" }}>
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="icon_elem">
            <Link to="https://www.instagram.com/" class="card">
              <img src={Instagram} alt="" />
            </Link>
            <Link to="https://ru-ru.facebook.com/" class="card1">
              <img src={Facebook} alt="" />
            </Link>

            <Link to="https://web.telegram.org/k/" class="card4">
              <img src={Telegram} alt="" />
            </Link>
            <Link to="https://www.whatsapp.com/" class="card5">
              <img src={WhatsApp} alt="" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
