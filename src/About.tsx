import { useEffect } from "react"
import { Link } from "react-router"

export const About = () => {
    
    useEffect(() => {
        console.log('About loaded')
    }, [])

    return (
        <div>
            <h1>About</h1>
            <Link to="/">Home</Link>
        </div>
    )}
