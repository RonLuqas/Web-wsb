import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)`
  background-color: inherit;
  padding: 1rem;
  border-radius: 10px;
`;

const StyledToolbar = styled(Toolbar)`
  flex-direction: column;
`;

const TopBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <StyledAppBar position="static" color="inherit">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          Recipe Finder
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={4} alignItems="center">
            <TextField label="Search" variant="standard" onChange={(e) => setInput(e.target.value)} value={input}/>
            <Button variant="contained" color="primary" type="submit">
              Search
            </Button>
          </Stack>
        </form>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TopBar;
