import gsap from "gsap";
// @ts-ignore
import { Draggable } from "gsap/Draggable";
import { Dock, Navbar, Welcome } from "@components";
import { Resume, Safari, Terminal, Finder, Text, Image, Contact } from "@windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Text />
      <Image />
      <Resume />
      <Finder />
      <Contact />
    </div>
  );
};

export default App;
