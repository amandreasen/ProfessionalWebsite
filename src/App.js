import './App.css';
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import {AppBar, Container, Typography, Box, StyledEngineProvider} from '@mui/material';
import NavBarItem from './components/NavBarItem';
import Intro from './components/Intro';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppBar position="sticky">
        <Container sx={{display: "flex", flexDirection: "row"}}>
        <NavBarItem 
            text="0. About Me" 
            link="#nav-bar-0"
          />
          <NavBarItem 
            text="1. Where I've Worked" 
            link="#nav-bar-1"
          />
          <NavBarItem
            text="2. Projects I've Done"
            link="#nav-bar-2"
          />
          <NavBarItem
            text="3. Skills I Have"
            link="#nav-bar-3"
          />
        </Container>
      </AppBar>
      <Box>
        <Box id="nav-bar-0">
          <Intro/>
        </Box>
        
        <Box id="nav-bar-1">
          <Typography variant="h2">1. Where I've Worked</Typography>
          <Experiences/>
        </Box>
        
        <Box id="nav-bar-2">
          <Typography variant="h2" sx={{mb: "15px"}}>2. Projects I've Done</Typography>
          <Projects/>
        </Box>
        
        <Box id="nav-bar-3" sx={{mb: "50px"}}>
          <Typography variant="h2" sx={{mb: "15px"}}>3. Skills I Have</Typography>
          <Skills/>
        </Box>
        
      </Box>
   
    </StyledEngineProvider>
  );
}

export default App;
