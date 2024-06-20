import { Box, Stack } from '@mui/material';
import React from 'react';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes';
import { Chat_History } from '../../data';

const Message = ({menu}) => {
    return (
      <Box p={3}>
        <Stack spacing={3}>
          {Chat_History.map((el, index) => {
            switch (el.type) {
              case "divider":
                // Timeline
                return <Timeline key={index} el={el} />;
  
              case "msg":
                switch (el.subtype) {
                  case "img":
                    // img msg
                    return <MediaMsg key={index} el={el} menu={menu}/>;
                  //  return <div key={index}>Image message: {el.message}</div>;
  
                  case "doc":
                    // Doc msg
                    return <DocMsg key={index} el={el} menu={menu} />;
  
                  case "link":
                    // link msg
                    return <LinkMsg key={index} el={el}menu={menu} />
  
                  case "reply":
                    // reply msg
                    return <ReplyMsg key={index} el={el} menu={menu} />;
  
                  default:
                    // text msg
                    return <TextMsg key={index} el={el} menu={menu}/>;
                }
  
              default:
                return <></>;
            }
          })}
        </Stack>
      </Box>
    );
  }
  
  export default Message;