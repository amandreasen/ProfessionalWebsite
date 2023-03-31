import React from 'react';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import Icon from "./Icon"
import ProfilePicture from "../assets/avatar.JPG";
import GithubIcon from "../assets/github.png";
import GmailIcon from "../assets/gmail.png";
import LinkedIn from "../assets/linkedin.png";
import "./Intro.css";

export default function Intro(props){
  return (
    <Box>
      <Typography variant="h1">Hi, I'm Amanda.</Typography>
      <Typography variant="h3"> I like to write code. </Typography>
      <Avatar src={ProfilePicture} sx={{width : "300px", height : "300px"}}/>
      <Stack direction="row" spacing={2}>
          <Icon src={GithubIcon} link="https://github.com/amandreasen"/>
          <Icon src={GmailIcon} link="mailto:apa49@cornell.edu"/>
          <Icon src={LinkedIn} link="https://www.linkedin.com/in/amanda-andreasen/"/>
      </Stack>
      <Typography variant="body1" sx={{width: "50%"}}>
      I’m a senior studying computer science at 
      <span>
      Cornell University. 
      </span>
      Upon graduating, I will be working as a software engineer at 
      <span>
        Jane Street Capital.
      </span>
      </Typography>
    </Box>
  )
}