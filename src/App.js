
import Input from "./components/Input";
import Button from "./components/Buttons";

import { Container, Content, Row} from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [memoryNumber, setMemoryNumber] = useState(0);
  const [operation, setOperation] = useState("");

  // Add number to screen
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0'? "": prev}${num}`);
  }

  // Clear screen
  const handleClear = () => {
    setCurrentNumber("0");
    setMemoryNumber(0);
    setOperation("");
  }

  // Sum operation
  const handleSum = () => {
    setOperation("+");

    if (memoryNumber === 0) {
      setMemoryNumber(Number(currentNumber));
      setCurrentNumber("0");
    } 

    setMemoryNumber(Number(memoryNumber) + Number(currentNumber));
    setCurrentNumber("0");
  }

  // Subtraction operation
  const handleSubtraction = () => {
    setOperation("-");

    if (memoryNumber === 0) {
      setMemoryNumber(Number(currentNumber));
      setCurrentNumber("0");
    }

    setMemoryNumber(Number(memoryNumber) - Number(currentNumber) * -1);
    setCurrentNumber("0");
  }

  // Show the result
  const handleResult = () => {
    if (operation === "+") {
      const sum = Number(memoryNumber) + Number(currentNumber);
      setCurrentNumber(sum);
    }

    if (operation === "-") {
      const subtraction = Number(memoryNumber) - Number(currentNumber);
      setCurrentNumber(subtraction);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick = {() => handleAddNumber("7")}/>
          <Button label="8" onClick = {() => handleAddNumber("8")}/>
          <Button label="9" onClick = {() => handleAddNumber("9")}/>
          <Button label="/"/>
        </Row>
        <Row>
          <Button label="4" onClick = {() => handleAddNumber("4")}/>
          <Button label="5" onClick = {() => handleAddNumber("5")}/>
          <Button label="6" onClick = {() => handleAddNumber("6")}/>
          <Button label="x"/>
        </Row>
        <Row>
          <Button label="1" onClick = {() => handleAddNumber("1")}/>
          <Button label="2" onClick = {() => handleAddNumber("2")}/>
          <Button label="3" onClick = {() => handleAddNumber("3")}/>
          <Button label="-" onClick = {() => handleSubtraction()}/>
        </Row>
        <Row>
          <Button label="=" onClick = {() => handleResult()}/>
          <Button label="0" onClick = {() => handleAddNumber("0")}/>
          <Button label="c" onClick = {() => handleClear()}/>
          <Button label="+" onClick = {() => handleSum()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
