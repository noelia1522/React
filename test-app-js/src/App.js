import Button from "./Button"
import Text from "./Text";
import { useState } from "react";
import Email from './Email'

const App = () => {
const [toggle, setToggle] = useState(true);

return (
	<div className="App">
	<Text toggle={toggle} displayTxt="Welcome to the world of testing"/>
	<Button setToggle={setToggle} btnTxt="Toggle Text"/>
  <Email></Email>
	</div>
);
}

export default App;
