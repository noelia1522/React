const Text = ({toggle, displayTxt}) => {

	// data-testid is a testing id
	// which is used only during tests
	return <h1 data-testid="text">{toggle? displayTxt : ""}</h1>
}

export default Text;
