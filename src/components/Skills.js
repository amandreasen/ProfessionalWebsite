import React from 'react';
import SkillBar from './SkillBar';
import { Box } from '@mui/material'
import { indigo, teal } from 'material-ui-colors';

export default function Skills(props){
  return (
    <Box>
      <SkillBar 
      name="OCaml"
      width="100%"
      color={indigo[400]}
      />
      <SkillBar 
      name="Java"
      width="75%"
      color={indigo[400]}
      />
      <SkillBar 
      name="Python"
      width="55%"
      color={indigo[400]}
      />
      <SkillBar
      name="React.js"
      width="80%"
      color={teal[300]}
      />
      <SkillBar
      name="Redux"
      width="50%"
      color={teal[300]}
      />
      <SkillBar
      name="Flask"
      width="30%"
      color={teal[300]}
      />
    </Box>

  );
}