import React, { useState, useEffect, createContext, useContext, useRef, useCallback, useMemo } from 'react';
import './stylesApp.css';
import Box from '@mui/material/Box';



const AppMessages = (props) => {

  const [myMessage, setMyMessage] = useState([]);
  // const bottomRef = useRef(null);

  const getData = async () => {
    try {
        const response = await fetch("https://770e-90-154-81-226.ngrok-free.app/getdata");
        const textData = await response.json();
        console.log("React ", JSON.parse(textData));
        setMyMessage(JSON.parse(textData));
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(()=>{
    getData();
  }, [myMessage]);

  return (
    <React.Fragment>
      <div id="workArea" className="work_area">
              <div className="messages">
                  <div className="form-field__messages">Сообщения</div>
                  <div className = {"form-field__textarea"}>
                    {
                        myMessage.map((el, index) => {
                            let myclass = el.type == "incoming" ? "message_in": "message_out";
                            return React.createElement('div', { key: el.id, className: myclass }, el.text);
                        })
                        
                    }
                  </div>
              </div>
      </div>
    </React.Fragment>

  );
};

export default AppMessages;
