import './App.css';
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import {Typography, Box, StyledEngineProvider} from '@mui/material';
import Intro from './components/Intro';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Box>
        <Intro/>

        <Box>
          <Typography variant="h2">1. Where I've Worked</Typography>
          <Experiences/>
        </Box>
        
        <Box>
          <Typography variant="h2" sx={{mb: "15px"}}>2. Projects I've Done</Typography>
          <Projects/>
        </Box>
        
        <Box>
          <Typography variant="h2" sx={{mb: "15px"}}>3. Skills I Have</Typography>
          <Skills/>
        </Box>
        
      </Box>
   
    </StyledEngineProvider>
  );
}

export default App;
