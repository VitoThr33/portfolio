import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from "styled-components"

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scorll-snap-behavior: smooth;
overflow-y: auto;
color: white;
background: url("./img/bg4.png");
background-size: cover;
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;
}
`
function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
