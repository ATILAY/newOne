import React, { useMemo, useRef } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import plus from "../../assets/ic_plus.png";
import minus from "../../assets/ic_minus.png";

const content = [
  {
    text: "Doping Hafıza nedir?",
    description:
      "Doping Hafıza TYT-AYT-LGS-KPSS ve DGS sınavlarına hazırlık aşamasında öğrencilerin çağı yakalayan online eğitim yöntemleri ve yapay zeka teknolojisini kullanarak etkili sonuçlar aldığı bir online eğitim platformudur. Doping Hafıza bünyesinde YKS, KPSS, LGS ve DGS'ye online hazırlık paketleri bulunmaktadır. Bu paketlerde Doping Hafıza; hafıza teknikleri ve akıl haritaları gibi öğretim enstrümanlarının yanı sıra yapay zeka destekli akıllı test paneli, çalışma programı desteği, infografikler, rehberlik videoları ve Reflekslerle Matematik ile Serüvenlerle Fen Bilimleri gibi sayısal dersler özelinde geliştirdiği konseptleri ile öğrenciler için doğru bir adres olma kimliğini göstermektedir.",
    iframe: (<iframe src="https://player.vimeo.com/video/522883837" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>)
    },
  {
    text: "Seneler alan eğitimleri saatlerle ifade edilen sürelerde veriyorsunuz. Bu nasıl oluyor?",
    description:
      "Serüvenlerle Fen Bilimleri konunun mantığını kavratan etkili animasyonlar, interaktif konu anlatımları, her üniteye özel orijinal arayüz ve görsel tasarımlarla oyun formatında hazırlanmış bir sistemdir. Soru bağlamında ise her videonun ardındaki pekiştirici sorular ve ünite sonlarındaki yeni nesil sorularla sistem öğrencilere puan toplama ve rozet kazanma imkânı sunar. Böylece devamlılık ve bütünlük esasına dayalı serüven formatı içinde ilerlemek ve sıkılmadan öğrenmek mümkün olur.",
    iframe: (<iframe src="https://player.vimeo.com/video/522883837" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>)
    },
  {
    text: "Online eğitim ile bu derece ciddi bir sınava hazırlanmak doğru mu?",
    description:
      "Tarih Yolculuğu, Doping Hafıza eğitmenleri tarafından devamlılık esası gözetilerek oyun formatında tasarlanmış etkili ve bütüncül bir öğrenme sistemidir. Tarih Yolcuğu’nun içinde hafıza teknikleri, animasyonlar, infografikler ve ünite özelinde hazırlanmış konseptler yer almaktadır. Öğrenci, seçtiği karakterle birlikte bir yolculuğa çıkar, konulardan ve video ardı sorulardan puanlar kazanıp yeni eşyalar elde eder. Konu anlatımlarından sonra gelen özet bilgilerle efektif bir şekilde not alır, video ardından gelen interaktif sorularla ise öğrendiklerini hızlı ve tam anlamıyla pekiştirir.",
  },
  {
    text: "Eğitimcilerin ders hakimiyeti, anlatımı ve sundukları ders içerikleri ne ölçüde güvenilir?",
    description:
      "Doping Hafıza eğitmenleri tarafından tasarlanmış TYT Coğrafya Macerası, devamlılık esası gözetilerek oyun formatında dizayn edilmiş etkili ve bütüncül bir öğrenme sistemdir. Coğrafya Macerasında öğrenci; animasyonlar, infografikler ve hafıza teknikleriyle öğrenir ve kafasında canlandıramadığı coğrafi unsurları somut olarak görme fırsatı elde eder. Videolara eşlik eden bilgi köşeleri ve içeriklerin ardından gelen kazanım notları yardımıyla efektif bir şekilde not alır. Video ardından gelen interaktif sorularla ise öğrendiklerini tam anlamıyla pekiştirmiş olur. Sınava yönelik kazanımlara uygun olarak hazırlanmış olan TYT Coğrafya Macerası ile öğrenciler, karakterler aracılığıyla bütüncül bir akış içerisinde, sembol çıkartmalar elde ederek koleksiyonlarını tamamlar, eğlenceli ve öğretici bir maceraya atılmış olurlar.",
  },
  {
    text: "Doping Hafıza’yı satın almadan neye benzediğini nasıl görebilirim?",
    description:
      "Reflekslerle Matematik, sınav için gerekli tüm matematiksel becerilerin öğrenciye adım adım kazandırıldığı etkili bir öğrenme sistemidir. Bu sistemle öğrenci her konuyu temelden ve reflekslere parçalanmış şekilde öğrenir. Her refleksten sonra soru çözer ve bir sonraki refleksi kazanmaya hazır hale gelir. Birikimli ilerleyerek daha kompleks soruları çözmek için gerekli donanıma sahip olur. Öğrenci herhangi bir üniteye giriş yaptığında isterse temel düzey, isterse de ileri düzey konu anlatım videolarını ve sorularını seçerek kendi belirlediği düzeyden öğrenimine devam edebilir. Ayrıca seviyesini kendisi seçmek yerine, ilgili ünite ile alakalı bir seviye tespit sınavına girerek yapay zekânın seviyesini tespit etmesini sağlayabilir.",
  },
  {
    text: "Doping Hafıza’yı neden sadece 2 farklı cihazda kullanabiliyorum?",
    description:
      "Serüvenlerle Fen Bilimleri konunun mantığını kavratan etkili animasyonlar, interaktif konu anlatımları, her üniteye özel orijinal arayüz ve görsel tasarımlarla oyun formatında hazırlanmış bir sistemdir. Soru bağlamında ise her videonun ardındaki pekiştirici sorular ve ünite sonlarındaki yeni nesil sorularla sistem öğrencilere puan toplama ve rozet kazanma imkânı sunar. Böylece devamlılık ve bütünlük esasına dayalı serüven formatı içinde ilerlemek ve sıkılmadan öğrenmek mümkün olur.",
  },
];

export default function FAQ() {
  const itemEls = useRef(new Array());

  const handleImageClick = e => e.target.previousSibling.click()

  const handleButtonClick = (e) => {
    if (e.target.nextSibling.src === plus) {
      e.target.nextSibling.src = minus
      e.target.parentElement.style.borderBottom = '0px'
      e.target.style.color = '#CC171B'
      e.target.style.fontWeight = 'bold'

    } else if (e.target.nextSibling.src === minus) {
      e.target.nextSibling.src = plus
      e.target.parentElement.style.borderBottom = '.2px solid rgba(0, 0, 0, 0.125)'
      e.target.style.color ='#3a4759'
      e.target.style.fontWeight = 'normal'
    }
    
    itemEls.current.map((el) => {
      if (el !== e.target) {
        el.parentElement.nextSibling.classList.value = "collapse";
        el.nextSibling.src = plus
        el.style.color = '#3a4759'
        el.style.fontWeight = 'normal'
      }
    });
  };

  return (
    <>
      <Accordion style={{ flexBasis: "60%" }} className="faq-accordion">
        {content.map((item, index) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                onClick={handleButtonClick}
                ref={(element) => (itemEls.current[index] = element)}
                eventKey={`${index}`}
              >
                {item.text}
              </Accordion.Toggle>
              <img onClick={handleImageClick} className="faq-icon" style={{position:'absolute'}} src={plus} />
            </Card.Header>
            <Accordion.Collapse eventKey={`${index}`}>
              <Card.Body className="faq-card-body"><div style={{fontSize:'14px'}}>{item.description}</div><div style={{marginTop:'30px'}}>{item.iframe}</div></Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  );
}
