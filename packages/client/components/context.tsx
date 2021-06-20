
import React, { useContext, FunctionComponent, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

interface UserWrapperProps {
    children: any
}

const SECRET_KEY = `${process.env.SECRET}`;

const UserWrapper: FunctionComponent<any> = ({children}): JSX.Element => {
    const [user, setUser] = useState({});

    useEffect(() => {
        let token: string = localStorage.getItem("user");

        let user_ = jwt.verify(token, SECRET_KEY);

        setUser(user_);
        console.log(user_);
    }, [user])

    return (
        <div>
            {children}
        </div>
    )
}

export default UserWrapper;