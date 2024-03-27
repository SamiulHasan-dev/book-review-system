import { useEffect, useState } from "react";
import OurUser from "../OurUser/OurUser";



const OurUsers = () => {
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('../Users.json')
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])

    return (
        <div>
            <h2 className="text-3xl font-bold text-center bg-slate-200 py-6 my-5 rounded-lg">Active Users</h2>
            <div className="grid lg:grid-cols-2 gap-5 my-10">
                {
                    users.map(user=> <OurUser user={user} key={user.id}></OurUser> )
                }
            </div>
        </div>
    );
};

export default OurUsers;