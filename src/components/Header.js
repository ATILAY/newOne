import React from "react";
import {
  faPaperPlane,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'
import Youtube from '../assets/Youtube.png'

export default function Header() {
  return (
    <div>
      <div className="header-top">
        <div className="header-top-content">
          <div className="header-top-content-left">
            <span className="header-top-content-left-group">
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span className="header-top-content-left-group">
              <span className="header-top-content-left-group-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span>0 533 236 20 05</span>
            </span>
            <span className="header-top-content-left-group">
              <span className="header-top-content-left-group-icon">
                <FontAwesomeIcon className="fa-rotate-90" icon={faPhone} />
              </span>
              <span>0 212 236 74 41</span>
            </span>
            <span className="header-top-content-left-group">
              <span className="header-top-content-left-group-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>info@dopinghafiza.com</span>
            </span>
          </div>

          <div className="header-top-content-middle"></div>

          <div className="header-top-content-right">
            {/* <FontAwesomeIcon
              className="header-top-content-right-icon"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="header-top-content-right-icon"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="header-top-content-right-icon"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="header-top-content-right-icon"
              icon={faYoutube}
            /> */}
            <img className="header-top-content-right-icon" src={Facebook}/>
            <img className="header-top-content-right-icon" src={Instagram}/>
            <img className="header-top-content-right-icon" src={Twitter}/>
            <img className="header-top-content-right-icon" src={Youtube}/>
          </div>
        </div>
      </div>

      <div className="header-below">
        <div className="header-below-content">
          <div className="header-below-content-logo">
            <a href="/" title="Doping Hafıza">
              <img
                src="https://cdn.dopinghafiza.com/assets/images/global/doping-hafiza-logo.svg"
                alt="Doping Hafıza"
              />
            </a>
          </div>
          <div className="header-below-content-middle"></div>
          <div className="header-below-content-navigation-links">
            <nav>
              <ul>
                <li>
                  <a href="/shop" title="Eğitim Paketlerimiz">
                    Eğitim Paketlerimiz
                  </a>
                </li>
                <li>
                  <a href="/videolar" title="Örnek Videolar">
                    Örnek Videolar
                  </a>
                </li>
                <li>
                  <a href="/yorumlar" title="Yorumlar &amp; Başarılarımız">
                    Yorumlar &amp; Başarılarımız
                  </a>
                </li>
                <li className="active">
                  <a href="/sss" title="Yardım">
                    Yardım
                  </a>
                </li>
                <li>
                  <a href="/kurumsal/11/hakkimizda.html" title="Biz Kimiz">
                    Biz Kimiz
                  </a>
                </li>
                <li>
                  <a href="/iletisim.asp" title="Bize Ulaşın">
                    Bize Ulaşın
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
