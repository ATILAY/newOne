import React from 'react'
import Hero from './Main/Hero'
import FAQ from './Main/FAQ'

export default function Main() {
    return (
        <div>
            <Hero/>
            <section className="faq-section">
                <div className="faq-section-div">
                <h3 style={{marginTop:'50px'}}>Merak Edilen Sorular?</h3>
                <p>En çok merak edilen konuları bir araya topladık. 😇</p>
                </div>
            </section>
            <section className="content-and-video">
                <div className="content-and-video-div">
                    {/* <div style={{width: '60%', display:'flex',displayDirection:'row', justifyContent:'space-between'}}>
                        <div><h3 style={{marginBottom:'20px'}}>Doping Hafıza nedir?</h3></div>
                    </div>
                    <div style={{width: '60%'}}>
                    <p>
                    Doping Hafıza TYT-AYT-LGS-KPSS ve DGS sınavlarına hazırlık aşamasında öğrencilerin çağı yakalayan online eğitim yöntemleri ve yapay zeka teknolojisini kullanarak etkili sonuçlar aldığı bir online eğitim platformudur. Doping Hafıza bünyesinde YKS, KPSS, LGS ve DGS'ye online hazırlık paketleri bulunmaktadır. Bu paketlerde Doping Hafıza; hafıza teknikleri ve akıl haritaları gibi öğretim enstrümanlarının yanı sıra yapay zeka destekli akıllı test paneli, çalışma programı desteği, infografikler, rehberlik videoları ve Reflekslerle Matematik ile Serüvenlerle Fen Bilimleri gibi sayısal dersler özelinde geliştirdiği konseptleri ile öğrenciler için doğru bir adres olma kimliğini göstermektedir.
                    </p>
                    </div>
                    <div>
                    <iframe src="https://player.vimeo.com/video/522883837" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                </div>
            </section>
            <div style={{display:'flex', justifyContent:'center'}}>
                <FAQ/>
            </div>
            <section className="after-faq-section">
                <div>
                <h3>Yararlı bulabileceğiniz konu başlıklar</h3>
                <p>Doping Hafıza Online Eğitim Platformu ile ilgili merak edilen konu başlıklarına aşağıdan ulaşabilirsiniz.</p>
                </div>
            </section>
        </div>
    )
}
