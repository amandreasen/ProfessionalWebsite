import React from 'react';
import { Box } from '@mui/material';
import Project from "./Project";
import PacmanImg from "../assets/pacman.png";
import XiImg from "../assets/xi.png";
import CovidDataImg from "../assets/covid_data_vis.png";

export default function Projects(props){
  return (
    <Box>
    <Project 
        title="Xi Compiler"
        tech={["OCaml"]}
        imageSrc={XiImg}
        descItems={[
          "Programmed a compiler from scratch in OCaml that compiles " +
          "Xi programs to x86 assembly",
          "Implemented optimizations such as linear scan register allocation, " +
          "dead code elimination, and loop unrolling"
        ]}
      />
      <Project 
        title="OCaml Pacman"
        tech={["OCaml"]}
        imageSrc={PacmanImg}
        descItems={["Led a team to implement a Pacman clone in OCaml",
        "Implemented GUI display logic with animations",
        "Encoded backend game logic such as game state updates and Pacman ghost AI"
        ]}
      />
      {/* •	Integrated Google Places API to display coronavirus cases by U.S. county given a location 
•	Used Python Flask server and SQLite database to create an API that supports searching COVID case data
•	Used React.js to create client-side application */}

      <Project 
        title="Covid-19 Data Visualization"
        tech={["React.js", "Flask", "SQL"]}
        imageSrc={CovidDataImg}
        descItems={["Integrated Google Places API to display coronavirus cases by" +  
        "U.S. county given a location",
        "Used Python Flask server and SQL database to create an API that" + 
        "supports searching COVID case data",
        "Used React.js to create client-side application"
        ]}
      />
    </Box>
  )
}