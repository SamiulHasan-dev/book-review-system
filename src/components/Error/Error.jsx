import { Link, useRouteError } from "react-router-dom"

const Error = () => {

    const error = useRouteError();

    return (
        <div  className="flex justify-center text-center my-40">
            <div>
                <h2 className="text-3xl my-4 font-extrabold">Oops!!!</h2>
                <p className="my-4">{error.statusText || error.message}</p>
                {
                    error.status === 404 && <div>
                        <h3 className="my-3">Page not found</h3>
                        <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Error;