import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../utils/UserContext';

function Authenticated({ exact, path, component, ...props }) {
    const user = useContext(UserContext);

    return (
        <Route
            exact={exact}
            path={path}
            render={() => {
                    if (!user) return <Redirect to="/" />;
                    return React.createElement(component, { ...props });
            }}
        />
    )
}

export default Authenticated;
