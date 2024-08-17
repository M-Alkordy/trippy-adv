import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"


function App() {

  return (
    <>
      <NavBar />
      <Hero img = "/assets/img/12257c5311e1cae5638aad.jpg" title = "Your Journey Your Story" desc = "Choose Your Favourite Destination." btn = {{content : "Travel Now" , show : true}} />
    </>
  )
}

export default App
