import React from 'react';
import {Box, Typography} from "@mui/material"
import './SkillBar.css'

export default function SkillBar({name, color, width}){
  return (
    <Box id="skill" sx={{flexDirection: "row"}}>
      <Typography inline variant="h6" sx={{width: "125px", textAlign: "right"}}>{name}</Typography>
      <Box id="skill-container">
        <Box id="skill-bar" backgroundColor={color} sx={{
          width: {width},
          marginLeft: "0px"
          }}/>
      </Box>
    </Box>
    
  )
}