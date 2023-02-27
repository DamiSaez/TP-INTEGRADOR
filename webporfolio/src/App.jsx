import './App.css'
import "react-icons"
import { Body } from './componentes/Body/Body'
import { Navbar } from './componentes/Navbar/Navbar'
import { Section } from './componentes/section/section'
import { Sectionmy } from './componentes/Sectionmy/Sectionmy'
import { Sectionform } from './componentes/Sectionform/Sectionform'
function App() {

  return (
    <div>
      <Navbar/>
      <Section/>
      <Body/>
      <Sectionmy/>
      <Sectionform/>
    </div>
  )
}

export default App
