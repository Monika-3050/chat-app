
import { Box, Stack } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';


const Conversation = () => {

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*chat header*/}
      <Header/>
      {/*msg*/}
      
      <Box width={"100%"} sx={{ flexGrow: 1 , height:"100%" , overflowY:"scroll"}}>
      <Message menu={true}/>
      </Box>
       
      {/*chat footer*/}
      <Footer/>
    </Stack>
  )
}

export default Conversation;
