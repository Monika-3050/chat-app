import { Box, Stack } from '@mui/material';
import React from 'react';
import { TextMsg, Timeline } from './MsgTypes';

const Message = () => {
  return (
     <Box p={3}>
        <Stack spacing={3}>
         {Chat_History.map((el)=>{
            switch (key) {
                case "divider":
                    //Timeline
                    return <Timeline el={el} />;

                case "msg":
                    switch (el.subtype) {
                        case "img":
                            //img msg
                            break;
                        case "doc":
                            //Doc msg
                            break;
                        case "link":
                            //link msg
                            break;
                        case "reply":
                            //reply msg
                            break;
                    
                        default:
                            //text msg
                            return <TextMsg el={el} />;
                            
                    }
                    break;
            
                default:
                    return <></>;
            }
         })}
        </Stack>
     </Box>
  )
}

export default Message