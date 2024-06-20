import React from 'react'
import { faker } from '@faker-js/faker';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import { Avatar, Box, Stack, Typography, IconButton, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StyledBadge from '../StyleBadge';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';


const Header = () => {
    const theme = useTheme();
    const dispatch=useDispatch();

  return (
    <Box
    p={2}
    sx={{ 
      width: "100%",
      backgroundColor:theme.palette.mode==="light" ? "#F8FAFF" : theme.palette.background.paper, 
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>
      <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} sx={{ width: "100%", height: "100%" }}>
        <Stack onClick={() =>{
           dispatch(ToggleSidebar());
        }} direction={"row"} spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ //it is telling where the circle should lie in pic
                vertical: 'bottom',
                horizontal: 'right'
              }}
              variant="dot">
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
            
          </Box>
          <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                  {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">
                  online
              </Typography>
            </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <IconButton>
                  <VideoCamera/>
              </IconButton>
              <IconButton>
                  <Phone/>
              </IconButton>
              <IconButton>
                  <MagnifyingGlass/>
              </IconButton>
              <Divider orientation="vertical" flexItem/>
              <IconButton>
                 <CaretDown/>
              </IconButton>
        </Stack>
      </Stack>
    </Box>
   
  )
}

export default Header;