import React, { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

const LoadingMoyene: FC = () => {

    return (
        <>
            <Skeleton variant="rectangular" width="100%" height={118} />
            <Skeleton />
            <Skeleton width="100%" />
        </>

    );
}

export default LoadingMoyene;