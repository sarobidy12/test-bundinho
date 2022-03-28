import React, { FC } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BootstrapDialog, Input } from "./style";
import IUser from "../../Interface/User";

export interface IDialog extends IUser {
    open: boolean;
    handleClose: () => void;
}

const ViewUser: FC<IDialog> = ({
    open,
    handleClose,
    firstName,
    lastName,
    email,
    note,
    img
}) => {

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
                                    src={img}
                                    sx={{ width: 56, height: 56 }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>

                    <br />

                    <Input
                        id="standard-basic"
                        label="Nom"
                        fullWidth={true}
                        value={firstName}
                        variant="standard"
                    />

                    <Input
                        id="standard-basic"
                        label="Prenom"
                        fullWidth={true}
                        value={lastName}
                        variant="standard"
                    />


                    <Input
                        id="standard-basic"
                        label="address mail"
                        fullWidth={true}
                        value={email}
                        variant="standard"
                    />

                    <Input
                        id="standard-basic"
                        label="Note"
                        fullWidth={true}
                        value={note}
                        variant="standard"
                    />

                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}


export default ViewUser