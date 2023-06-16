import React, { useState, useEffect, createContext, useContext, useRef, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';



const Footer = (props) => {

  return (
    <React.Fragment>
      <div id="message_area" className="message_area">
            <input id="SendMessage" type="text" className="form-field__input" name="SendMessage" placeholder="Введите сообщение" />
            <input id="phoneNumber" type="text" className="form-field__input" name="phoneNumber" placeholder="Введите номаер телефона" /><br />
            <button id="webQuery" className="json_button" value="return">Отправить сообщение</button>
      </div>
    </React.Fragment>

  );
};

export default Footer;
