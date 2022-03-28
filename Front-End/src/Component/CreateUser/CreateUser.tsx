import React, { FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { UserStoreInterface } from "../../Store/UserStore";
import { inject, observer } from 'mobx-react';
import { AddUser } from "../Modal";
import { useSnackbar } from "notistack";
import IUser from "../../Interface/User";


const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

interface IApp {
    UserStore: UserStoreInterface
}

const CreateUser: FC = (props) => {

    const { UserStore } = props as IApp;

    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const toggleOpen = () => {
        setOpenDialog(!openDialog);
    }

    const addNewUser = async (user: IUser) => {

        setLoading(true);

        await UserStore.AddNewUSer(user)
            .then((res: any) => {

                if (res.data === "email already exist") {

                    enqueueSnackbar("L'address mail existe deja ", {
                        variant: "error",
                    });

                    setLoading(false);
                    return;
                }

                enqueueSnackbar("Utilisateur a été créé ", {
                    variant: "success",
                });

                setLoading(false);
                setOpenDialog(false);

            }).catch((err: any) => {
                enqueueSnackbar("Une erreur est survenue", {
                    variant: "error",
                });
                setLoading(false);
                setOpenDialog(false);
            })

    }

    return (
        <div>

            <AddUser
                open={openDialog}
                handleClose={toggleOpen}
                submit={addNewUser}
                loading={loading}
            />

            <Zoom
                in={true}
                timeout={transitionDuration}
                unmountOnExit
            >
                <Fab sx={fabStyle} aria-label="Ajouter" color='primary' onClick={toggleOpen}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </div>
    );
}


export default inject('UserStore')(observer(CreateUser));
