import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import UploadSection from './Components/UploadSection';
import Term from './Components/Term';
import Inspiration from './Components/Inspiration';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <UploadSection/>
      <Term/>
      <Inspiration/>
      <Footer/>
    </div>
  );
}

export default App;
