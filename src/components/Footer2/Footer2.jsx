import React from "react";
import "./Footer2.css";
import Facebook from "../../assets/imagesFooter/Facebook.png";
import Instagram from "../../assets/imagesFooter/Instagram.png";
import Telegram from "../../assets/imagesFooter/Telegram.png";
import WhatsApp from "../../assets/imagesFooter/WhatsApp.png";
import { Link } from "react-router-dom";

import logo from "../../assets/logo1.png";

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

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
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
