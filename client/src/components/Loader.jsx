import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <CircularProgress />
        Loading...
    </div>
  )
}

export default Loader;