import Navbar from "../components/headers/Navbar";
import Home from "../screens/home/Home";
import "./app.scss"
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
