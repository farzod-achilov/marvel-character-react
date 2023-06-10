import { Outlet } from "react-router-dom";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";

function App() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
