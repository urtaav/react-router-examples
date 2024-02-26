import React, { useEffect, useRef, useState } from 'react'
const BASE_URL = "https://jsonplaceholder.typicode.com";

const DataFetching = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);

    const abortControllerRef = useRef(null);

    useEffect(() => {
        const getPosts = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                    signal: abortControllerRef.current?.signal
                });
                const posts = await response.json();
                setPosts(posts);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                    return;
                }
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getPosts()


    }, [page]);

    if (error) {
        return <div>Something went wrong! Please try again.</div>;
    }

    return (
        <div className="tutorial">

            <h1 className="mb-4 text-2xl">Data Fething in React</h1>
            <h6>Total {posts.length}</h6>
            <br />
            <button className='fetching' onClick={() => setPage(page + 1)}>Increase Page ({page})</button>
            <br />         <br />
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <ul className='list-group'>
                    {posts.map((post) => {
                        return <li key={post.id} className='article__item'>
                            {post.title}
                        </li>;
                    })}
                </ul>
            )}


        </div>
    )
}

export default DataFetching
