import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/post/:postId" element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
