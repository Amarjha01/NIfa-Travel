import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />  {/* 👈 This ensures the Home page or any route is rendered */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
