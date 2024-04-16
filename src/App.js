import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import MyList from "./components/MyList";
import { WatchlistProvider } from "./context/WatchlistContext";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <WatchlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}>
              <Route index element={<MovieDetails />} />
            </Route>

            <Route path="my-lists" element={<MyList />} />
          </Routes>
        </BrowserRouter>
      </WatchlistProvider>
    </div>
  );
}

export default App;
