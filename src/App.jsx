import Dock from "#components/Dock"
import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
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
    </main>
)
}

export default App