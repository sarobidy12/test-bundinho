import React, { FC, useEffect } from 'react';
import { UserStoreInterface } from "../../Store/UserStore";
import { inject, observer } from 'mobx-react';
import {
    Container
} from "./style";
import ItemUser from "./ItemUser";
import IUser from "../../Interface/User";
import Grid from '@mui/material/Grid';
import Moyen from "../Moyen";

interface IApp {
    UserStore: UserStoreInterface
}

const ListUser: FC = (props) => {

    const { UserStore } = props as IApp;

    useEffect(() => {
        UserStore.getListUser()
            .then((res: any) => {
                UserStore.upadeList(res.data.listUser);
            });
    }, [UserStore])

    return (
        <Container>

            <Grid container={true} direction="row">

                <Grid item={true} md={2} xs={12}>
                </Grid>

                <Grid item={true} md={6} xs={12}>
                    {
                        UserStore.ListUser.map((user: IUser) => <ItemUser
                            img={user.img}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            note={user.note}
                            email={user.email}
                        />)
                    }
                </Grid>

                <Grid item={true} md={2} xs={12}>
                    <Moyen />
                </Grid>

            </Grid>
        </Container >

    );
}

export default inject('UserStore')(observer(ListUser));