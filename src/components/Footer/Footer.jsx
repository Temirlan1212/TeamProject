import React from "react";
import "../Footer/Footer.css";
import Facebook from "../../assets/imagesFooter/Facebook.png";
import Instagram from "../../assets/imagesFooter/Instagram.png";
import Telegram from "../../assets/imagesFooter/Telegram.png";
import WhatsApp from "../../assets/imagesFooter/WhatsApp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_contact">
          <div className="footer__text">
            <div className="footer__text_item text_min second">
              <ul>
                <ol>Меню сайта</ol>
                <br />
                <Link className="teg_a" to="/">
                  Главная
                </Link>
                <br />
                <Link className="teg_a" to="/products">
                  Товары
                </Link>
                <br />
                <Link className="teg_a" to="/contacts">
                  Контакты
                </Link>
                <br />
                <Link className="teg_a" to="/aboutus">
                  О нас
                </Link>
              </ul>
            </div>

            <div className="footer__text_item first">
              <ul>
                <ol>Покупателям</ol>
                <br />
                <Link to="/">
                  <li>Способы оплаты</li>
                </Link>
                <br />
                <Link to="/">
                  <li>Правила продажи</li>
                </Link>
                <br />
                <Link to="/">
                  <li>Вопросы и ответы</li>
                </Link>
              </ul>
            </div>

            <div className="icon">
              <ul>
                <ol>Мы в соц.сетях</ol>
              </ul>
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
          </div>
        </div>
        <div className="rights">
          2004-2022 © Wildberries — модный интернет-магазин одежды, обуви и
          аксессуаров для малышей.
          <br /> Все права защищены.
        </div>
      </div>
    </>
  );
};

export default Footer;
