import Dock from "#components/Dock"
import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Resume from "#windows/Resume"
import Safari from "#windows/Safari"
import Terminal from "#windows/Terminal"
import gsap from "gsap"

import { Draggable } from "gsap/Draggable"
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
    </main>
)
}

export default App