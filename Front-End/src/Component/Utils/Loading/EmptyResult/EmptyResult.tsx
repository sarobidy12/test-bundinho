import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const EmptyResult: FC = () => {

    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item={true}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Aucun resultat
                </Typography>
            </Grid>


        </Grid>

    );
}

export default EmptyResult;