import logo from "./logo.svg";
import "./App.css";
import StoreStatus from "./components/StoreStatus";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="App">
        <ToastContainer />
        <StoreStatus />
      </div>
    </>
  );
}

export default App;
