import React, {useState} from 'react'
import searchArticle from '../../assets/ic_searchArticle.png'

const inputContent = ['Reflexlerle Matematik nedir?', 
'Satın aldığım pakette Reflekslerle Matematik neden yok?',
'Reflekslerle Matematik hangi eğitim paketlerinde var?',
'Reflekslerle Matematiğin diğer eğitim metodlarından farkı var mı?'
]


export default function Hero() {
  const [searchText, setSearchText] = useState('')
  const [textsArray, setTextsArray] = useState([])

  const handleChange = e => {
    setSearchText(e.target.value)
    let textArrayContainSearchTerm = inputContent.filter( (text, index) => {
      console.log(searchText)
      return (text.toLowerCase().indexOf(searchText.toLowerCase()) > -1 && searchText.length > 1) 
    })

    setTextsArray(textArrayContainSearchTerm)
  }

    return (
        <div className="hero">
            <h2 style={{ color: 'white'}}>Sorun yaşıyorsanız</h2>
            <h1 style={{paddingTop: '-20px', paddingBottom: '5px', color: 'white',  fontWeight:'bolder'}}>Yardım için burdayız</h1>
            <form className="form">
            <img src={searchArticle} style={{height:'30px', margin: '25px'}}></img>
            <input value={searchText} onChange={handleChange} className="input" type="text" placeholder="Yardım makalelerinde ara.."/>
            </form>
            <div style={{zIndex: 99, background:'white', width: '650px'}}>
              <div style={{position: 'absolute', width: '650px', paddingLeft:'40px', background: 'white'}}>
            {textsArray.length > -1 &&  
              textsArray.map(t => (<div className="search-results" style={{height:'40px', margin: '24px 0'}}>{t}</div>))
            }
              </div>
            </div>
        </div>
    )
}
