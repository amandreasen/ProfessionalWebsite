import React from 'react';
import { Avatar } from '@mui/material';

export default function Icon({src, link}){
  return (
<Avatar
  src={src}
  onClick={() => {window.open(link, "_blank")}}
  sx={{
    height: "55px", 
    width: "55px"
  }}
/>);
}