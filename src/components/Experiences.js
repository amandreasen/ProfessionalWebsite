import React, {useState} from 'react';
import { Box, Typography, List, ListItem} from '@mui/material';
import {Timeline, TimelineConnector, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent} from "@mui/lab";
import "./Experiences.css";

export default function Experiences(props){
  const [selectedExperience, setSelectedExperience] = useState("js")

  const isJSSelected = selectedExperience === "js"
  const isWayfairSelected = selectedExperience === "wayfair"

  return (
    <Box id="timeline">
      <Timeline position="left" sx={{width: "100%"}}>
        <TimelineItem onClick={() => setSelectedExperience("js")}>
          <TimelineSeparator>
            <TimelineDot color={isJSSelected ? "success" : "grey"}/>
            <TimelineConnector sx={{height: "200px"}}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography id="timeline-label">
              2022: Jane Street
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem onClick={() => setSelectedExperience("wayfair")}>
          <TimelineSeparator>
            <TimelineDot color={isWayfairSelected ? "success" : "grey"}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography id="timeline-label">
              2021: Wayfair
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Box sx={{width: "1000px"}}>
        <Typography>
          { isJSSelected 
          ? 
            <Box>
              <List>
                <ListItem>
                  <Typography id="list-item">
                    Worked in OCaml to complete multiple projects 
                    with two teams in distinct areas
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography id="list-item">
                  Built an app to help track important financial information
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography id="list-item">
                  Improved data processing to support an increased load of trading data
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography id="list-item">
                  Upgraded a critical internal library by adding significant flexibility
                  to user configuration options 
                  </Typography>
                </ListItem>
          </List>
          </Box>
            
          :

            <Box>
              <List>
                <ListItem>
                  <Typography id="list-item">
                  Developed new features and front-end components using React.js and Redux
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography id="list-item">
                  Built new UI for email content management app, leading to an estimated 50% 
                  reduction in user time spent in key workflows
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography id="list-item">
                  Maintained multiple Notifications apps used to generate over $500 
                  million in yearly revenue
                  </Typography>
                </ListItem>
          </List>
            </Box>
          }
        </Typography>
      </Box>
    </Box>);
}