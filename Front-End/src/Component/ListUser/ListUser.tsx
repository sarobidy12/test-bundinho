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
import { LoadingList, EmptyResult } from "../Utils/Loading";

interface IApp {
    UserStore: UserStoreInterface
}

const ListUser: FC = (props) => {

    const { UserStore } = props as IApp;

    useEffect(() => {
        UserStore.setLoading(true);
        UserStore.getListUser()
            .then((res: any) => {

                UserStore.upadeList(res.data.listUser);
            }).finally(() => {
                setTimeout(() => {
                    UserStore.setLoading(false);
                }, 1000)
            });
    }, [UserStore])

    const sortByDate = () => {
        return UserStore.ListUser
            .slice()
            .sort((a: any, b: any) => {

                const date1 = new Date(a.dateCreated).getTime();
                const date2 = new Date(b.dateCreated).getTime();
                return date2 - date1;
            })
    }

    return (
        <Container>

            <Grid container={true} direction="row">

                <Grid item={true} md={2} xs={12}>
                </Grid>

                <Grid item={true} md={6} xs={12}>

                    {
                        UserStore.loading ? (
                            <LoadingList />
                        ) : (
                            <>{sortByDate().length > 0 ? (
                                <>
                                    {
                                        sortByDate()
                                            .map((user: IUser) => <ItemUser
                                                img={user.img}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                                note={user.note}
                                                email={user.email}
                                            />)
                                    }
                                </>
                            ) : (
                                <>
                                    <EmptyResult />
                                </>
                            )}
                            </>
                        )
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