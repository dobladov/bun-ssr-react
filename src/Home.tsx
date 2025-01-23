import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import type { InitialData } from "./interfaces";

export const Home = () => {
    const data = useLoaderData<InitialData>();

    useEffect(() => {
        console.log('Home loaded');
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <Link to="/about">About</Link>
        </div>
    )
};
