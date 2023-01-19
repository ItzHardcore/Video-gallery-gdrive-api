import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import FloatingMedia from "./components/FloatingMedia";

function App() {
  return (
    <div>
      <MyNavbar />
      <Content />
      <FloatingMedia />
      <Footer />
    </div>
  );
}

export default App;
