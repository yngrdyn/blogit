import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:postId" element={<PostDetails/>} />
        </Routes>
      </div>
    </BlogProvider>
  );
}

export default App;
