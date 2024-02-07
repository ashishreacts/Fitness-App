import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/">
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component="a" href="/#about">
      <ListItemText primary="About" />
    </ListItemButton>
    <ListItemButton component="a" href="/#services">
      <ListItemText primary="Services" />
    </ListItemButton>
    <ListItemButton component="a" href="/#find-bmi">
      <ListItemText primary="Find BMI" />
    </ListItemButton>
    <ListItemButton component="a" href="/#locate-us">
      <ListItemText primary="Locate Us" />
    </ListItemButton>
  </React.Fragment>
);
