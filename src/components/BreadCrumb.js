import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from '../assets/ic_home.png'
import right from '../assets/ic_right.png'

export default function BreadCrumb() {
  return (
    <div className="bread-crumb">
      <div clasName="bread-crumb-main">
        <div className="bread-crumb-nav-container">
          <nav aria-label="breadcrumb" className="breadcrumb container">
            <ol>
              <li>
                <a href="/" title="Doping Hafıza">
                  {/* <FontAwesomeIcon icon={faHome} /> */}
                  <img src={home}/>
                </a>
              </li>
              <li>
              <img src={right}/>
              </li>
              <li>
                Yardım
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
