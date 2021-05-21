import Consoles from "./Consoles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="container my-3">
      <Header />
      <Consoles />
    </div>
  );
}
