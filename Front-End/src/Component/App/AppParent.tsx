import React, { FC } from 'react';
import { UserStoreInterface } from "../../Store/UserStore";
import { inject, observer } from 'mobx-react';
import Header from "../Header";
import CreateUser from "../CreateUser";
import ListUser from "../ListUser";

interface IApp {
    UserStore: UserStoreInterface
}

const AppParent: FC<IApp> = ({ UserStore }) => {
    return (
        <div>
            <Header />
            <ListUser />
            <CreateUser />
        </div>
    );
}

export default inject('UserStore')(observer(AppParent));
