import './App.css';
import './Layout.scss'

import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header></Header>
    <BreadCrumb></BreadCrumb>
    <Main></Main>
    <Footer></Footer>
    </>
  );
}

export default App;

