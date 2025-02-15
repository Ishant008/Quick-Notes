import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";


const App = () => {
 
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.clear()
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.clear()
      });
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
