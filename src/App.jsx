import Dock from "#components/Dock"
import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Finder from "#windows/Finder"
import Resume from "#windows/Resume"
import Safari from "#windows/Safari"
import Terminal from "#windows/Terminal"
import Text from "#windows/Text"
import Image from "#windows/Image"
import Contact from "#windows/Contact"
import gsap from "gsap"

import { Draggable } from "gsap/Draggable"
import Home from "#components/Home"
gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
)
}

export default App