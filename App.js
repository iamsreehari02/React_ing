import './App.css';
import First from "./components/header/headerComponent";
import Imagepart from './components/firstImage/firstImageComponent';
import ListingPage from './components/projectPlanComponent/ListingPage';
import WeCreateArt from './components/CreateTheArtComponent/WeCreateArt'

function App() {
  return (
    <div>
      <First />
      <Imagepart/>
      <ListingPage/>
      <WeCreateArt/>
    </div>
  );
}

export default App;
