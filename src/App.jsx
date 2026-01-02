
import { Navbar,Welcome ,Dock} from "#components";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import { Finder, Terminal } from "#windows";
import { Resume } from "#windows";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
   <main>
    <Navbar/>
    <Welcome/>
    <Dock/>
    <Terminal/>
    <Resume/>
    <Finder/>
   </main>
  );
};

export default App;
