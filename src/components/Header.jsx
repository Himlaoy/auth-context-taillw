import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.email)

    const handleOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    return (
        <nav>
            <div className="navbar bg-primary text-primary-content rounded">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span> <Link onClick={handleOut} className="btn btn-ghost normal-case text-xl" >Sign out</Link>
                    </> : <Link to="/login" className="btn btn-ghost normal-case text-xl" >login</Link>
                }
            </div>

        </nav>
    );
};

export default Header;