import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Input = styled(TextField)(({ theme }) => ({
    margin: "1vh 0"
}));


const LoadingButtonClick = styled(LoadingButton)(({ theme }) => ({
    width: "100%"
}));

export {
    BootstrapDialog,
    Input,
    LoadingButtonClick
}


