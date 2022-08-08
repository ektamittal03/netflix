import Navbar from "../components/navbar/navbar"
import Features from "../components/features/features"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features type="movies"/>
    </div>
  )
}

export default Home