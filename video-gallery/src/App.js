import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <MyNavbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
