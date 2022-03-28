import React, { FC, useEffect, useState } from 'react';
import { UserStoreInterface } from "../../Store/UserStore";
import { inject, observer } from 'mobx-react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import IUser from "../../Interface/User";


interface IApp {
    UserStore: UserStoreInterface
}

interface IResMoyenne {
    Moyen: number;
    First: IUser;
    Dernier: IUser;
}

const Moyen: FC = (props) => {

    const { UserStore } = props as IApp;

    const [moyenne, setMoyenne] = useState<IResMoyenne | null>(null);

    useEffect(() => {
        UserStore.getMoyenne()
            .then((res: any) => {
                setMoyenne(res.data);
            });
    }, [UserStore]);

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    La moyenne
                </Typography>
                <Typography variant="h2" component="div">
                    {moyenne?.Moyen || 0}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Le premiers
                </Typography>
                <Typography variant="body2">
                    {`${moyenne?.First.firstName || ""}  ${moyenne?.First.lastName || ""}` || ""}
                    <br />
                    {`Note : ${moyenne?.First.note || 0}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Le dernier
                </Typography>
                <Typography variant="body2">
                    {`${moyenne?.Dernier.firstName || ""}  ${moyenne?.Dernier.lastName || ""}` || ""}
                    <br />
                    {`Note : ${moyenne?.Dernier.note || 0}`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default inject('UserStore')(observer(Moyen));