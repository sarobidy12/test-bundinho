import React, { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SearchIcon from '@mui/icons-material/Search';
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from "./style";
import { UserStoreInterface } from "../../Store/UserStore";
import { inject, observer } from 'mobx-react';

interface IApp {
    UserStore: UserStoreInterface
}
let typeTimeout: any;

const Header: FC = (props) => {

    const { UserStore } = props as IApp;

    const [keyWord, setKeyWord] = useState('');

    const onKeyDown = (event: any) => {
        clearTimeout(typeTimeout);
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            UserStore
                .filterUser(keyWord || "")
                .then((res: any) => {
                    UserStore.upadeList(res.data.listUserFilter);
                })
        }
    };

    const handleChange = (e: any) => {
        setKeyWord(e.target.value);
        typeTimeout = setTimeout(function () {
            UserStore
                .filterUser(e.target.value || "")
                .then((res: any) => {
                    UserStore.upadeList(res.data.listUserFilter);
                })
        }, 1000);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <BeachAccessIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Bundinho
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleChange}
                            onKeyDown={onKeyDown}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default inject('UserStore')(observer(Header));