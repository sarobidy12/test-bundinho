import React, { FC, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BootstrapDialog, Input, LoadingButtonClick } from "./style";
import IUser from "../../Interface/User";
import SaveIcon from '@mui/icons-material/Save';

export interface IDialog {
    open: boolean;
    handleClose: () => void;
    submit: (user: IUser) => void;
    loading: boolean;
    formErreur: any;
}

const AddUser: FC<IDialog> = ({
    open,
    handleClose,
    submit,
    loading,
    formErreur
}) => {

    const [dataUser, setDataUser] = useState<IUser | any>({});

    const handleSubmit = (event: any) => {

        event.preventDefault();

        event.stopPropagation();

        submit(dataUser as IUser | any);

        setDataUser({});
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setDataUser({
            ...dataUser,
            [name]: value
        } as IUser | any)

    }

    return (
        <div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <DialogContent dividers>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item={true}>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={dataUser?.img || ""}
                                    sx={{ width: 56, height: 56 }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>

                    <form onSubmit={handleSubmit}>

                        <Input
                            id="outlined-basic"
                            label="Nom"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth={true}
                            onChange={handleChange}
                            value={dataUser?.firstName || ""}
                            error={formErreur?.firstName}
                        />

                        <Input
                            id="outlined-basic"
                            label="Prenom"
                            variant="outlined"
                            name="lastName"
                            required
                            onChange={handleChange}
                            fullWidth={true}
                            value={dataUser?.lastName || ""}
                            error={formErreur?.lastName}
                        />

                        <Input
                            id="outlined-basic"
                            label="address mail"
                            variant="outlined"
                            required
                            fullWidth={true}
                            onChange={handleChange}
                            name="email"
                            value={dataUser?.email || ""}
                            error={formErreur?.email}
                        />

                        <Input
                            id="outlined-basic"
                            label="Note"
                            variant="outlined"
                            required
                            fullWidth={true}
                            type="number"
                            onChange={handleChange}
                            name="note"
                            error={formErreur?.note}
                            value={dataUser?.note || ""}
                        />

                        <LoadingButtonClick
                            color="primary"
                            onClick={handleSubmit}
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                        >
                            Enregistrer
                        </LoadingButtonClick>

                    </form>

                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}


export default AddUser