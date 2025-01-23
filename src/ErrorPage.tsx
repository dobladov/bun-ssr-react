import { Link, useRouteError } from "react-router";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <div>Something went wrong</div>
            <pre>{JSON.stringify(error, null, 2)}</pre>
            <Link to="/">Go back to home</Link>
        </div>
    )
}
