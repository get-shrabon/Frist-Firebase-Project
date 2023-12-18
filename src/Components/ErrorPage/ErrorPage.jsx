import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="py-40 text-center">
            <h1 className="text-center text-6xl font-bold">Oops!!!</h1>
            <Link to="/">
            <button className="btn btn-outline mt-8 btn-accent">Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;