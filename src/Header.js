import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboardTeacher, faCodeBranch, faBook } from '@fortawesome/free-solid-svg-icons';

const Root = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center',
});

const Header = () => {
  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Title variant="h6">
            <FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: '10px' }} />
            EduCareer Voices
          </Title>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button color="inherit" sx={{ fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.1)', marginRight: 1 }}>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
              Home
            </Button>
            <Button color="inherit" sx={{ marginRight: 0.5 }}>
              <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '5px' }} />
              Courses
            </Button>
            <Button color="inherit">
              <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px' }} />
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;
