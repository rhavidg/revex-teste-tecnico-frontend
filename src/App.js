import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
      />
      <AppRoutes />
    </div>
  );
}

export default App;
