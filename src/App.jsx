import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Finder from "#windows/Finder";
import Resume from "#windows/Resume";
import Safari from "#windows/Safari";
import Terminal from "#windows/Terminal";
import Text from "#windows/Text";
import Image from "#windows/Image";
import Contact from "#windows/Contact";
import Home from "#components/Home";
import Photos from "#windows/Photos";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  );
};

export default App;
