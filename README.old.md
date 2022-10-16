# react-typewriter

//The goal of this project is to create an interactive typewriter in react.

handleKeyDown
- Create a copy of keyRows
- Loop through the keyRowsCopy and search for a keyObject whose key matches the event key and set isPressed on that keyObject to true.
- Call setKeyRows on the copy

handleKeyUP
- Create a copy of keyRows
- Loop through the keyRowsCopy and search for a keyObject whose key matches the event key and set isPressed on that keyObject to false.
- Call setKeyRows on the copy

Note: To copy keyRows, you will need to use the deepClone function to create the copy instead of the spread operator. This is because keyRows has mulitple nested rows and object and the spread operator only creates a copy of the first level of an object or array.

const deepClone = (object) =>{
	/* This function will create a "deep-clone" of an object which is necessary
	when creating a copy an object with multiple nested layers of objects or arrays. */
	return JSON.parse(JSON.stringify(object))
}



********************2) Displaying the Keyboard:***********
- _Approach_: In order to display the keyboard grid, we are going to map through the array's in the first level of keyRows and render a <KeyboardRow/> component for each one. Then in each <KeyboardRow/>, we are going to map through the individual key objects and render a <KeyboardKey/> component for each one. Finally, we will use css flexbox to display them on the page. 
- Create a new react component called <KeyboardRow/>
- The enclosing div of <KeyboardRow/> should be assigned the class name of "Keyboard-row"
- In the JSX of <KeyboardGrid/>, map through keyRows and return a <KeyboardRow/> component in the .map callback function. Name the first parameter of the .map callback function "keyRow" and pass keyRow into the <KeyboardRow/> component as a prop.
- Create a new react component called <KeyboardKey/> 
- The enclosing div of <KeyboardKey/> should be assigned the class name of "Keyboard-key"
- In the JSX of <KeyboardRow/>, map through the keyRow prop and return a <KeyboardKey/> component in the .map callback function. Name the first parameter of the .map callback function "keyObject" and pass keyObject into the <KeyboardKey/> component as a prop. 
- In the JSX of <KeyboardKey/>, display the value {props.keyObject.letter}
- Add flexbox properties to Keyboard-row and/or Keyboard-grid to display the keyboard as shown in the screenshot.
	- _Hint_: The <KeyboardRow/> should display as a flexbox row. To get the <KeyboardKey/>'s to fill up the space, you will have to add particular flex property onto the .Keyboard-key class.

*******************3) Handling key events:*************************
- _Approach_: The keyRows array has been setup with the property isPressed initialized to false. We will use this value to conditionally change the color of each key when it is pressed and when it is released. The handleKeyDown and handleKeyUp functions are how we will set the isPressed property in the keyRows array.
- Add code to handleKeyDown and handleKeyUp, both of them should:
	- Create a new variable keyRowsClone that is a copy of keyRows:
		- _Hint_: The spread operator can be used here to make the copy of keyRows
	- Loop through all the key objects in keyRows. In order to do this, you will first have to first loop through keyRows to access each array representing a row of key objects. Second, you will have to loop through the objects within each key row array. 
	- Check to see if the event.key equals the keyObject.letter. 
		- _Suggestion_: Call .toLowerCase() on both the event key and the keyObject letter for the comparison.
- Once you have found the keyObject that matches the event.key, set the isPressed property on that keyObject to:
	- true in the handleKeyDown function
	- false in the handleKeyUp function
- Finally, both handleKeyDown and handleKeyUp should call setKeyRows and pass in keyRowsClone as the argument.

*****************4) Lighting up the keyboard:*********************
- _Approach_: Now that we are setting the isPressed property on each key, we can use that property to conditionally render the css on those keys.
- In the <KeyboardKey/> component, create a variable called keyboardKeyClass and set the css class of the enclosing div in <KeyboardKey/> equal to this variable. Add code so that keyboardKeyClass will be set to the string "Keyboard-key pressed" if the keyObject.isPressed property is true and "Keyboard-key released" if the keyObject.isPressed property is false.
	- _Commentary_: There are multiple ways of achieving the same effect here. Ultimately, we need the class of the enclosing <div> for <KeyboardKey> to have the "pressed" class when the key is pressed, the "released" class when the key is released and "Keyboard-key" in all cases. 
- Add a css class in App.css that will target any element with "Keyboard-key" and "pressed" in its class and switch the background-color and color properties from Keyboard-key for this class. I.E. since the background-color is slategray and the color is white on .Keyboard-key, the background-color for this new class should be white and the color should be slategray.
- If the above was implemented correctly, you should be able to type on your computer keyboard and see the react keyboard keys light up in turn.

*******************5) Displaying the output text:******************
- _Approach_: In order to save the text we are typing, we are going to create a new state variable in <App/> that will be updated with every letter that we type. We will implement a textHandler function that will be passed into <KeyboardGrid/> that will update the saved text. Finally, we will create a simple <TextDisplay/> component to render our output text.
- Add a new state variable on <App/> called text along with its setter function.
- Create a new function called textHandler in the body of <App/> (above the return statement) that takes keyObject as its first parameter.
- In the textHandler function, call setText with the current value of the text state variable concatenated with keyObject.letter as its argument. I.E. Every time textHandler gets called in onKeyDown, we are going to take the letter the user typed, concatenate it with the current value of text, and set that new value by calling setText.
- Pass textHandler as a prop into <KeyboardGrid/>.
- Inside the handleKeyDown function in <KeyboardGrid/>, call props.textHandler with keyObject passed in as an argument when the proper keyObject matching the typed key is found. I.E. call props.textHandler right next to where you are setting keyObject.isPressed = true.
- Create a new component called <TextDisplay/>.
- Add an instance of the <TextDisplay/> component to the JSX of <App/>.
- Pass in the text state variable as a prop into <TextDisplay/>
- In the JSX of <TextDisplay/>, render the typed text that is coming through the props.
- If the above was implemented correctly, you should be able to type on your keyboard and see your text appear on the page.