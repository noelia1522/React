import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';


const btnValues=[

  ["C", "+-","%","/"],
  [7,8,9, "x"],
  [4,5,6, "-"],
  [1,2,3,"+"],
  [0,".","="],
  ];
  

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn,i)=>(
            <Button
            value={btn}
            key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;