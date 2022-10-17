// import logo from './logo.svg';
// import {useState, useRef, useRef, useEffect} from "react";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState, useRef, useEffect } from "react";
import "./App.css";

// const deepClone = (object) =>{
// 	/* This function will create a "deep-clone" of an object which is necessary
// 	when creating a copy an object with multiple nested layers of objects or arrays. */
// 	return JSON.parse(JSON.stringify(object))
// }

const App = () => {
  return (
    <div className="App-header">
      <KeyboardGrid/>
    </div>
  );
}

const KeyboardGrid = (props) => {

	const keyBoardArr = [
		[
      { letter: "`", isPressed: false },
      { letter: "1", isPressed: false },
      { letter: "2", isPressed: false },
      { letter: "3", isPressed: false },
      { letter: "4", isPressed: false },
      { letter: "5", isPressed: false },
      { letter: "6", isPressed: false },
      { letter: "7", isPressed: false },
      { letter: "8", isPressed: false },
      { letter: "9", isPressed: false },
      { letter: "0", isPressed: false },
			{ letter: "-", isPressed: false },
			{ letter: "=", isPressed: false },
			{ letter: "Backspace", isPressed: false }
    ],
    [
      { letter: "Tab", isPressed: false },
      { letter: "Q", isPressed: false },
      { letter: "W", isPressed: false },
      { letter: "E", isPressed: false },
      { letter: "R", isPressed: false },
      { letter: "T", isPressed: false },
      { letter: "Y", isPressed: false },
      { letter: "U", isPressed: false },
      { letter: "I", isPressed: false },
      { letter: "O", isPressed: false },
      { letter: "P", isPressed: false },
      { letter: "[", isPressed: false },
      { letter: "]", isPressed: false },
      { letter: "\\", isPressed: false },
    ],
    [
      { letter: "CapsLock", isPressed: false },
      { letter: "A", isPressed: false },
      { letter: "S", isPressed: false },
      { letter: "D", isPressed: false },
      { letter: "F", isPressed: false },
      { letter: "G", isPressed: false },
      { letter: "H", isPressed: false },
      { letter: "J", isPressed: false },
      { letter: "K", isPressed: false },
      { letter: "L", isPressed: false },
      { letter: ";", isPressed: false },
      { letter: "'", isPressed: false },
			{ letter: "Enter", isPressed: false }
    ],
    [
			{ letter: "Shift", isPressed: false },
      { letter: "Z", isPressed: false },
      { letter: "X", isPressed: false },
      { letter: "C", isPressed: false },
      { letter: "V", isPressed: false },
      { letter: "B", isPressed: false },
      { letter: "N", isPressed: false },
      { letter: "M", isPressed: false },
      { letter: ",", isPressed: false },
      { letter: ".", isPressed: false },
      { letter: "/", isPressed: false },
      { letter: "Shift", isPressed: false },
    ],
		[
			{ letter: " ", isPressed: false }
		]
  ];

  // const [keyRows, setKeyRows] = useState(keyBoardArr);

  // const deepClone = (object) =>{
   
  //   return JSON.parse(JSON.stringify(object))
  // }

  // const [keyRows, setKeyRows] = useState(keyBoardArr);

  // const handleKeyDown = (event) => {
	// 	console.log(event.key)
  //   const copyArray = deepClone(keyRows)
  //   console.log(copyArray);
  //   // use .map to go through the array and select a key
  // };

  
  // const handleKeyUp = (event) => {
	// 	console.log(event.key)
  // };

	
//   const ref = useRef(null);

//   useEffect(() => {
//     ref.current.focus();
//   }, []);

//   return (
//     <div
//       className="Keyboard-grid"
//       ref={ref}
//       tabIndex={-1}
// 			onKeyDown={handleKeyDown}
//       onKeyUp={handleKeyUp}
//     >
//     {keyRows.map((keyRow, index)=>{
//       return <KeyboardRow keyRow={keyRow} key={index}/>
//     })}
//     </div>
//   );
// };
//********Display the Keyboard***********
// const KeyboardRow = (props) => {
//   console.log(props)
//   return (
//     <div className="Keyboard-row">
//       {props.keyRow.map((keyObject, index)=>{
//         return <KeyboardKey keyObject = {keyObject} key= {index}/>
//       })}
//     </div>
//   );
// }

// const KeyboardKey = (props) => {
//   return (
//     <div className = "Keyboard-key">
//       {props.keyObject.letter}
//     </div>
//   )
// }
// export default App;




//class review
const [keyRows, setKeyRows] = useState(keyBoardArr);

  const handleKeyDown = (event) => {
    let keyRowsClone = [...keyRows];

    keyRowsClone = keyRowsClone.map((keyRows) => {
      //This will map through the keyRows arrays and return an updated version of the key row
      const updatedKeyRow = keyRows.map((keyObject) => {
        // If we do match the event key, we set isPressed to be true for just that key
        if (event.key.toLowerCase() === keyObject.letter.toLowerCase()) {
          textHandler(keyObject, "keyDown");
          return {
            ...keyObject,
            isPressed: true,
          };
        }

        // If we do not match the letter, we return just the normal key object
        return keyObject;
      });

      return updatedKeyRow;
    });

    setKeyRows(keyRowsClone);
  };

  const handleKeyUp = (event) => {
    let keyRowsClone = [...keyRows];

    keyRowsClone = keyRowsClone.map((keyRows) => {
      //This will map through the keyRows arrays and return an updated version of the key row
      const updatedKeyRow = keyRows.map((keyObject) => {
        // If we do match the event key, we set isPressed to be false for just that key
        if (event.key.toLowerCase() === keyObject.letter.toLowerCase()) {
          textHandler(keyObject, "keyUp");
          return {
            ...keyObject,
            isPressed: false,
          };
        }

        // If we do not match the letter, we return just the normal key object
        return keyObject;
      });

      return updatedKeyRow;
    });

    setKeyRows(keyRowsClone);
  };

  /* The following lines for the useRef and useEffect are serving a single purpose for us, it is getting the div in the JSX of <KeyboardGrid/> and focusing it on page load.*/
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div
      className="Keyboard-grid"
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      {keyRows.map((keyRow, index) => {
        return <KeyboardRow keyRow={keyRow} key={index} />;
      })}
    </div>
  );
};

const KeyboardRow = (props) => {
  return (
    <div className="Keyboard-row">
      {props.keyRow.map((keyObject, index) => {
        return <KeyboardKey keyObject={keyObject} key={index} />;
      })}
    </div>
  );
};

const KeyboardKey = (props) => {
  const { keyObject } = props;
  const { letter, isPressed } = keyObject;
  const keyClass = isPressed === true ? "pressed" : "released";

  // let keyClass = ""
  // if (isPressed === true) {
  // 	keyClass = "pressed"
  // } else {
  // 	keyClass = "released"
  // }

  return (
    <div className={`Keyboard-key ${keyClass}`}>{props.keyObject.letter}</div>
  );
};

export default App;