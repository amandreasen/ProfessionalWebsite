import React from 'react';
import {Box, Container, Grid, Typography, List, ListItem} from "@mui/material";
import "./Project.css"

export default function Project({title, imageSrc, tech, descItems}){
  return (
    <Grid container spacing={3} 
    direction="column"
    alignItems="center"
    justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" display="inline"> {title} </Typography>
        <Typography display="inline"> --- </Typography>
        <Typography variant="h5" display="inline"> 
        {tech.join(" - ")} 
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box id="project-info">
          <img src={imageSrc} alt="oops" width="150px" height="200px"/>
          <Container sx={{width: "500px"}}>
            <List>
              {
                descItems.map(item => {
                  return (
                    <ListItem>
                      <Typography id="project-list-item">{item}</Typography>
                    </ListItem>
                  )
                })
              }
            </List>
          </Container>
        </Box>
      </Grid>
    </Grid>
  )
}