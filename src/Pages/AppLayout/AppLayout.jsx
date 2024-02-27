import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';

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
import MultiStep from '../MultiStep/MultiStep';
import { MultistepProvider } from '../MultiStep/context/MultistepContext';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import Common from '../MultiStepForm/components/Common';
import Address from '../MultiStepForm/components/Address';
import Description from '../MultiStepForm/components/Description';


const AppLayout = () => {

    const [user, setUser] = useState();
    const navigate = useNavigate();

    const logOut = () => {
        setUser(null);
        navigate("/");
    };
    //get current active route
    const location = useLocation();

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className="navbar-brand" href="#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/"> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/posts"  className={`nav-link ${location.pathname === '/posts' ? 'active' : ''}`}>
                                    Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                                    About
                                </Link>
                            </li>
                            {user && (
                                <li className="nav-item">
                                    <Link to="/stats" className={`nav-link ${location.pathname === '/stats' ? 'active' : ''}`}>
                                        Stats
                                    </Link>
                                </li>
                            )}
                            {!user && (
                                <li className="nav-item">
                                    <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>
                                        Login
                                    </Link>
                                </li>
                            )}
                            {user && (
                                <li className="nav-item">
                                    <span onClick={logOut} className='nav-link' style={{ cursor: 'pointer' }}>
                                        Logout
                                    </span>
                                </li>
                            )}
                            <li className="nav-item"> 
                                <Link to="/tic-tac-toe" className={`nav-link ${location.pathname === '/tic-tac-toe' ? 'active' : ''}`}>
                                    tic-tac-toe
                                </Link>
                            </li>
                            <li className="nav-item">  
                                <Link to="/data-fetching" className={`nav-link ${location.pathname === '/data-fetching' ? 'active' : ''}`}>
                                    Data fetching
                                </Link>
                            </li>
                            <li className="nav-item"> <Link to="/e-commerce" className={`nav-link ${location.pathname === '/e-commerce' ? 'active' : ''}`}>
                             Advance filtering
                            </Link></li>
                            <li className="nav-item"><Link to="/multi-step" className={`nav-link ${location.pathname === '/multi-step' ? 'active' : ''}`}>
                                Multi Step
                            </Link></li>
                            <li className="nav-item"><Link to="/multi-step2" className={`nav-link ${location.pathname === '/multi-step2' ? 'active' : ''}`} >
                                Multi Step Form
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* All routes are nested inside it */}
            <div className="container-fluid">
                <MultistepProvider>
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
                        <Route path="/multi-step" element={<MultiStep />} />
                        <Route path="/multi-step2" element={<MultiStepForm />}>
                            <Route index element={<Common />} />
                            <Route path="address" element={<Address />} />
                            <Route path="description" element={<Description />} />
                        </Route>
                    </Routes>
                </MultistepProvider>
            </div>

        </>
    )
}

export default AppLayout
