
import { Navbar,Welcome ,Dock} from "#components";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import { Contacts, Finder, Image, Terminal, Text } from "#windows";
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
    <Text/>
    <Image/>
    <Contacts/>
   </main>
  );
};

export default App;
