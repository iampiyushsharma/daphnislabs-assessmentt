import React from 'react'

// import { Box, Breadcrumbs, Link , Typography } from '@mui/material'

// function Breadcrumbss() {
 

//  return (
//     <Box m={2}>
//         <Breadcrumbs arial-label='breadcrumb' separator='>' color='black'>
//             <Link underline='hover' href='#'>
//                 Medical Darpan
//             </Link>
//             <Link underline='hover' href='#'>
//                Search 
//             </Link>
//             <Typography color='text.primary'>FabiFlu Tablet</Typography>
//         </Breadcrumbs>
//     </Box>
//  );
// }
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbss() {
  return (
    <ul className='breadcrumbs'>
      <li className='breadcrumbs__item'>
        <a href='' className='breadcrumbs__link'>Medical Darpan</a>
        
      </li>
      <li className='breadcrumbs__item'>
        <a href='' className='breadcrumbs__link'>Search</a>
        
      </li>
      <li className='breadcrumbs__item'>
        <a href='' className='breadcrumbs__link'>FabiFlu Tablet</a>
      </li>
    </ul>
  );
}


export default Breadcrumbss;
