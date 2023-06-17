import React, { useState, useEffect, createContext, useContext, useRef, useCallback, useMemo } from 'react';
import './stylesApp.css';
import Box from '@mui/material/Box';



const AppMessages = (props) => {

  const [myMessage, setMyMessage] = useState([]);
  const ref = useRef(null);

  const getData = async () => {
    try {
        let url = new URL(window.location.href + "getdata");
        // let url = window.location.href;
        const response = await fetch(url);
        const textData = await response.json();
        // console.log("React ", JSON.parse(textData));
        setMyMessage(JSON.parse(textData));
      } catch (error) {
        console.error(error);
      }
  }

  const funcObserver = (item) => {
    // let options = {
    //   root: document.querySelector("#box"),
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };

    // let callback1 = (entries, observer) => {
    //   entries.forEach(
    //       (entry) => {
    //         if (entry.isIntersecting) {
    //           console.log('on the screen!');
    //         }
    //         entry.scrollIntoView({behavior: 'smooth'});
    //       }
    //   )
    // }
    // const observer = new IntersectionObserver(callback1, options);
    // observer.observe(item);
    item.scrollIntoView({behavior: 'smooth'});
  }

  useEffect(()=>{
    getData();
    if (ref.current) {
      funcObserver(ref.current);
    }
  }, [myMessage]);

  return (
    <React.Fragment>
      <div id="workArea" className="work_area">
              <div className="messages">
                  <div className="form-field__messages">Сообщения</div>
                  <div className = {"form-field__textarea"} id='box'>
                    {
                        myMessage.map((el, index) => {
                            let myclass = el.type == "incoming" ? "message_in": "message_out";
                            return React.createElement('div', { key: el.id, className: myclass }, el.text);
                        })
                        
                    }
                    <div ref={ref}></div>
                  </div>
              </div>
      </div>
    </React.Fragment>

  );
};

export default AppMessages;
