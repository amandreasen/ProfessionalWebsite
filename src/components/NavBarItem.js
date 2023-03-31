import React from 'react';
import {Box, Typography} from '@mui/material';
import "./NavBarItem.css";

export default function NavBarItem ({text, link}){
  return (
    <Box>
    <a href={link}>
      <Typography id="nav-bar-item" inline>
        {text}
      </Typography>
    </a>
    </Box>
  )
}