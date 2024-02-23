import './App.css'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import NotFound from './Pages/NotFound/NotFound';
// import Posts from './Pages/Posts/Posts';
// import PostsList from './Pages/Posts/PostsList';
// import Post from './Pages/Posts/Post';
import _Routes from './Routes/Routes';

function App() {

  return (
    <>
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/posts" style={{ padding: 5 }}>
            Posts
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
        </nav>
        {/* All routes are nested inside it */}
        {/* <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostsList />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
            <_Routes/>
      </Router>
    </>
  )
}

export default App
