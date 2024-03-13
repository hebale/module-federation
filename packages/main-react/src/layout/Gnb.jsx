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
  { icon: <ChevronRightIcon size={2} />, name: 'LIST-REACT', path: '/list' },
  { icon: <ChevronRightIcon />, name: 'FORM-VUE', path: '/form' }
]

const Gnb = () => {
  
  const navigate = useNavigate();  
  const goToPath = path => navigate(path);

  return (
    <Stack component={'aside'}>     
      <Box component="nav">
        <List>
          {gnbLists.map((data, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => goToPath(data.path)}>

                <ListItemText primary={data.name} />
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