import React from "react";
import  { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feeds from "./Components/Feeds"
import Topuser from "./Components/Topuser";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 mb-4">
          <Link to="/" className="text-blue-500">Top Users</Link>
          {/* <Link to="/trending" className="text-blue-500">Trending Posts</Link> */}
          <Link to="/feed" className="text-blue-500">Feed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Topuser />} />
          {/* <Route path="/trending" element={<Trending />} /> */}
          <Route path="/feed" element={<Feeds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
