import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className='App'>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
        </Routes>
    </div>
  );
}
export default App;