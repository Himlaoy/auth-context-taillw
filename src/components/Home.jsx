import React, { useContext } from 'react';
import { useActionData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>Home {user && <span>{user.name}</span> } </h2>
        </div>
    );
};

export default Home;