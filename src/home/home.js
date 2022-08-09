import Navbar from "../components/navbar/navbar"
import Features from "../components/features/features"
import List from "../components/list/list"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features type="movie"/>
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home