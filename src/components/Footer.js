import React from "react";
import Weirdo from "../assets/Weirdo Head.png";
import Package from "../assets/Package.png";
import Basket from "../assets/Basket.png";
import Refund from "../assets/Refund.png";
import ic_chat from "../assets/ic_chat.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <section className="footer-cards">
          <div>
            <img src={Weirdo} />
            <h3>Genel Konular</h3>

            <p>Doping Hafıza</p>
            <p>Hakkımızda</p>
            <p>Hafıza Teknikleri</p>
            <p>Reflekslerle Matematik</p>
            <p style={{color: '#CC171B', fontWeight:'700'}}>Tümünü Göster</p>
          </div>
          <div>
            <img src={Package} />
            <h3>Eğitim Paketlerimiz</h3>

            <p>Hangi paketi seçmeliyim?</p>
            <p>Eğitim paketleri arasındaki farklar nelerdir</p>
            <p>Eğitim içerikleri</p>
            <p>Doping Hafıza neye benziyor?</p>
            <p style={{color: '#CC171B', fontWeight:'700'}}>Tümünü Göster</p>
          </div>
          <div>
            <img src={Basket} />
            <h3>Satın Alma Süreçleri</h3>

            <p>Ödeme seçenekleri</p>
            <p>Satın alırken neden kullanıcı bilgilerimi istiyorsunuz?</p>
            <p>Satın aldıktan sonra ne olacak? </p>
            <p>Satın alırken çıkan Dönem Seçimi nedir?</p>
            <p style={{color: '#CC171B', fontWeight:'700'}}>Tümünü Göster</p>
          </div>
          <div>
            <img src={Refund} />
            <h3>İptal ve İade</h3>

            <p>Mesafeli Satış Sözleşmesi</p>
            <p>İptal ve İade Şartları</p>
            <p>Sipariş iptal politikası </p>
            <p>Kişisel bilgilerin güvenliği</p>
            <p>KVKK Aydınlatma Metni</p>
            <p style={{color: '#CC171B', fontWeight:'700'}}>Tümünü Göster</p>
          </div>
        </section>
      </div>
      <section className="footer-chat-related">
          <div className="footer-chat-image-related">
              <img src={ic_chat}/>
          </div>
          <div  className="footer-wishful">Dilerseniz <span style={{fontWeight: '700'}}>Doping Hafıza Uzmanlarımıza danışabilir,</span> merak ettiklerinizi en hızlı şekilde cevaplayabiliriz.</div>
          <div className="start-conversation">Konuşma Başlat</div>
      </section>
      <section></section>
    </>
  );
}
