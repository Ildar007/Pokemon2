
import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';
import bgImage3 from './assets/bg2.jpg';
import bgImage1 from "./assets/bg3.jpg";


const App = () => {
  return (
    <>
       <Header
             title="Title"
             descr="My description"
       />
        <Layout 
             id={1}
             title="Picachu"
             descr="Chu Chu"
             bgImage={bgImage1}
            
        />
        <Layout
              id={2}
              title="layout title 2"
              descr="Layout Description 2"
              colorBg="red"
        />
        <Layout
               id={3}
               title="layout title 3"
               descr="Layout Description 3"
               bgImage={bgImage3}  
        />
        <Footer/>
      </>  
  )
  
}

export default App;
