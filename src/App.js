import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Calendar } from "./components/calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
