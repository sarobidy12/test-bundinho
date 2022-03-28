import React, { FC, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { ViewUser } from "../Modal";
import IUser from "../../Interface/User";

interface ITeims {
    img: string;
    name: string;
    note: number;
}

const styleItem = {
    width: '100%',
}

const ItemUser: FC<IUser> = ({
    firstName,
    lastName,
    email,
    note,
    img,
}) => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <div>

            <Button sx={styleItem} onClick={toggleOpen}>
                <List sx={styleItem}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={lastName} src={img} />
                        </ListItemAvatar>
                        <ListItemText primary={`${firstName} ${lastName}`} secondary={`Note : ${note}`} />
                    </ListItem>
                </List>
            </Button>

            <ViewUser
                img={img}
                firstName={firstName}
                lastName={lastName}
                note={note}
                email={email}
                open={open}
                handleClose={toggleOpen}
            />

        </div>


    );
}

export default ItemUser;