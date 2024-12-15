import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster toastOptions={{ duration: 1000 }} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
