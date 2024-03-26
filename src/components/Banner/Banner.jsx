import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero h-[90vh] bg-base-300 rounded-md my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/k4Q7HHM/pngwing-1-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <Link to="/list"><button className="btn btn-success text-white font-bold mt-5">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;