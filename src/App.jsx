import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import GallaryBody from './components/GallaryBody';
import Data from "./components/Data"


function App() {
  return (
    <div>
      <GallaryHeader/>

      <div>
       <GallaryBody data={Data}/>
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
