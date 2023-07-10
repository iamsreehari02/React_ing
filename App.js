import './App.css'
import First from "./components/header/headerComponent";
import Imagepart from './components/firstImage/firstImageComponent'
import ProjectPlan from './components/projectPlanComponent/projectPlan'

function App() {
  return (
    <div>
      <First />
      <Imagepart/> 
      <div className="project_plans">
        <ProjectPlan/>
        <ProjectPlan/>
        <ProjectPlan/>


      </div>
    </div>
  );
}

export default App;
