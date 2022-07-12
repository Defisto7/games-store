import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { store } from "./redux";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} exact/>
            <Route path="/app/:title" element={<GamePage/>} exact/>
          </Routes>
      </div>
    </Provider>
  );
}
export default App;