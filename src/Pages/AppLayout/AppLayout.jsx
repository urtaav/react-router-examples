import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Posts from '../Posts/Posts';
import PostLists from '../Posts/PostLists';
import Post from '../Posts/Post';
import Stats from '../Stats/Stats';
import Login from '../Login/Login';
import TicTacToe from '../../TicTacToe/ticTacToe';
import DataFetching from '../DataFetching/DataFetching';
import ECommerce from '../e-commerce-advance-filtering/ECommerce';


const AppLayout = () => {

    const [user, setUser] = useState();
    const navigate = useNavigate();

    const logOut = () => {
        setUser(null);
        navigate("/");
    };


    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                    <Link to="/posts" className='nav-link'>
                        Posts
                    </Link>
                    <Link to="/about" className='nav-link'>
                        About
                    </Link>
                    <span className='separator'> | </span>
                    {user && (
                        <Link to="/stats" className='nav-link'>
                            Stats
                        </Link>
                    )}
                    {!user && (
                        <Link to="/login" className='nav-link'>
                            Login
                        </Link>
                    )}
                    {user && (
                        <span onClick={logOut} className='nav-link' style={{ cursor: 'pointer' }}>
                            Logout
                        </span>
                    )}
                    <Link to="/tic-tac-toe" className='nav-link'>
                        tic-tac-toe
                    </Link>
                    <Link to="/data-fetching" className='nav-link'>
                        Data fetching
                    </Link>
                    <Link to="/e-commerce" className='nav-link'>
                        E-commerce advance filtering
                    </Link>
                </div>
            </nav>
            {/* All routes are nested inside it */}
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />}>
                        <Route index element={<PostLists />} />
                        <Route path=":slug" element={<Post />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login onLogin={setUser} />} />
                    <Route path="/stats" element={<Stats user={user} />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/tic-tac-toe" element={<TicTacToe />} />
                    <Route path="/data-fetching" element={<DataFetching />} />
                    <Route path="/e-commerce" element={<ECommerce />} />
                </Routes>
            </div>

        </>
    )
}

export default AppLayout
