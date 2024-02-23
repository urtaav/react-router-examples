import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Posts from '../Pages/Posts/Posts';
import PostsList from '../Pages/Posts/PostsList';
import Post from '../Pages/Posts/Post';
import About from '../Pages/About/About';
import NotFound from '../Pages/NotFound/NotFound';

const _Routes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        {
            path: "/posts",
            element: <Posts />,
            children: [
                { index: true, element: <PostsList /> },
                { path: ":slug", element: <Post /> }
            ],
        },
        { path: "/about", element: <About /> },
        { path: "*", element: <NotFound /> }
    ])
}

export default _Routes
