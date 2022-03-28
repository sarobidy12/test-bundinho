import React, { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const LoadingList: FC = () => {

    return (

        <Grid container={true} direction="row">

            {
                [0, 1, 2].map(item =>
                    <>
                        <Grid item={true} md={2} xs={12}>
                            <Skeleton variant="circular" width={80} height={80} />
                        </Grid>

                        <Grid item={true} md={10} xs={12}>
                            <Skeleton variant="rectangular" width='80%' height={20} />
                            <br />
                            <Skeleton variant="rectangular" width='80%' height={20} />
                            <br />
                            <Skeleton variant="rectangular" width='80%' height={20} />
                        </Grid>
                        <br />
                        <br />
                        <br />
                        <br />
                    </>
                )
            }

        </Grid>


    );
}

export default LoadingList;