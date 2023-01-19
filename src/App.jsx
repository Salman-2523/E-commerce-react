import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Sidebar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
