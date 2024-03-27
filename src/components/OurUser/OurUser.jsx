import { FaUserClock } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import PropTypes from 'prop-types'

const OurUser = ({ user }) => {
    const { name, username, shortName, email } = user;
    return (
        <div>
            <div className="flex bg-slate-50 items-center p-6 rounded-3xl gap-10">
                <div>
                    <div className="avatar online placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-16">
                            <span className="text-xl">{shortName}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold"> {name}</h2>
                    <h5 className="flex items-center gap-3"><FaUserClock></FaUserClock><span className="text-slate-600 text-base">{username}</span></h5>
                    <p className="flex items-center gap-3"><MdMarkEmailRead></MdMarkEmailRead> <span className="text-slate-600 text-base">{email}</span></p>
                </div>
            </div>
        </div>
    );
};

OurUser.propTypes ={
    user: PropTypes.object
}

export default OurUser;