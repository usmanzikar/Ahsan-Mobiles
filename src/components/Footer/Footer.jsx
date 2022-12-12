import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/">about us</a>
                </li>
                <li>
                  <a href="#2">our services</a>
                </li>
                <li>
                  <a href="#3">privacy policy</a>
                </li>
                <li>
                  <a href="#4">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#1">FAQ</a>
                </li>
                <li>
                  <a href="#2">shipping</a>
                </li>
                <li>
                  <a href="#3">returns</a>
                </li>
                <li>
                  <a href="#4">order status</a>
                </li>
                <li>
                  <a href="#5">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
              <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="oneplus">OnePlus</a>
                </li>
                <li>
                  <a href="offers">Aquas</a>
                </li>
                <li>
                  <a href="brands">IPhones</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=100025129627681"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://mobile.twitter.com/Muhamma83862103"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/ahsan_ali_090/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <a
                className="olx-link"
                href="https://www.olx.com.pk/profile/6b9f86ba-34f9-4c29-82ff-3f39ec1006a5"
                rel="noreferrer"
                target="_blank"
              >
                <img src={require("../img/olx.png").default} alt=""></img>
              </a>
              <h4>Whatsapp No :</h4>
              <a href="tel:923136991012"> +92-0313-6991012</a>
              <h4> Email:</h4>
              <a href="aa7160160@gmail.com">aa7160160@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
      <p className="footer__p"> Copyright &copy; 2021 🕵️ : muhammadusmanbrw789@.com</p>
    </div>
  );
};

export default Footer;
