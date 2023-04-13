import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import UploadSection from './Components/UploadSection';
import Term from './Components/Term';
import Inspiration from './Components/Inspiration';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <UploadSection/>
      <Term/>
      <Inspiration/>
    </div>
  );
}

export default App;
