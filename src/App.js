import './App.css';
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="/" apiKey={apiKey} pageSize={pageSize} category="" />} />
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} category="general" />} />
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} category="health" />} />
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} category="science" />} />
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} category="technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
