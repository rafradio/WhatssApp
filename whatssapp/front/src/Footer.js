import React, { useState, useEffect, createContext, useContext, useRef, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';



const Footer = (props) => {

  let data = props.data;

  const sendMessage = (data) => {
    // console.log(data);
    let phoneId = document.getElementById("phoneNumber").value + "@c.us";
    let bodyMessage = {
            "chatId": phoneId,
            "message": document.getElementById("SendMessage").value
    };
    let urlShort = `https://api.green-api.com/waInstance${data.idInstance}/`;
    let method = `sendMessage/${data.apiTokenInstance}`;
    let url = new URL(urlShort + method);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(bodyMessage)
        })
        .then(response => response.json())
        .then(data => {
            let dataString = data;
            // console.log(dataString);
            document.getElementById("SendMessage").value = "";
        });
  }

  return (
    <React.Fragment>
      <div id="message_area" className="message_area">
            <input id="SendMessage" type="text" className="form-field__input" name="SendMessage" placeholder="Введите сообщение" />
            <input id="phoneNumber" type="text" className="form-field__input" name="phoneNumber" placeholder="Введите номаер телефона" /><br />
            <button id="webQuery" className="json_button" onClick={() => sendMessage(data)}>Отправить сообщение</button>
      </div>
    </React.Fragment>

  );
};

export default Footer;
