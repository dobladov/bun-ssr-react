import { useEffect } from "react";
import { Link } from "react-router";

export const Home = () => {

    useEffect(() => {
        console.log('Home loaded');
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
        </div>
    )
};
