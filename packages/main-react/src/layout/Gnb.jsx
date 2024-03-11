import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Stack,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText
} from '@mui/material';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const gnbLists = [
  { icon: <ChevronRightIcon />, name: 'LIST-REACT', path: '/list' },
  { icon: <ChevronRightIcon />, name: 'FORM-VUE', path: '/form' }
]

const Gnb = () => {
  
  const navigate = useNavigate();  
  const goToPath = path => navigate(path);

  return (
    <Stack
      sx={{
        borderRight: '1px solid #0000001f',
        background: '#f5f5f5'
      }}
    >
      <Box>
        <Typography
          component="h3"
          sx={{
            padding: '24px 0 26px',            
            textAlign: 'center',
            fontWeight: 700
          }}
        >
          MAIN-REACT
        </Typography>
      </Box>
      <Divider />
      <Box component="nav">
        <List>
          {gnbLists.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => goToPath(data.path)}>

                <ListItemText primary={data.name}/>
                <ListItemIcon>{ data.icon }</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  )
};

export default Gnb;