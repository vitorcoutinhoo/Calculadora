
import Input from "./components/Input";
import Button from "./components/Buttons";

import { Container, Content, Row} from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [memoryNumber, setMemoryNumber] = useState(0);
  const [flagResult, setFlagResult] = useState(false);
  const [operation, setOperation] = useState("");

  const handleAddNumber = (num) => {
    if (flagResult){
      setCurrentNumber(num);
      setFlagResult(false);
      return;
    }

    setCurrentNumber(prev => `${prev === '0'? "": prev}${num}`);
  }

  const handleClear = () => {
    setCurrentNumber("0");
    setMemoryNumber(0);
    setFlagResult(false);
    setOperation("");
  }

  const handleSum = () => {
    setOperation("+");

    if (flagResult) {
      const sum = Number(currentNumber) + Number(memoryNumber);
      setMemoryNumber(String(sum));
    }

    setMemoryNumber(currentNumber);
    setCurrentNumber("0");
  }

  const handleSubtraction = () => {
    setOperation("-");
    
    if (flagResult) {
      const subtraction = Number(memoryNumber) - Number(currentNumber);
      setMemoryNumber(String(subtraction));
    }

    setMemoryNumber(currentNumber);
    setCurrentNumber("0");
  }

  const handleMultiplication = () => {
    setOperation("x");

    if (flagResult) {
      const multiplication = Number(currentNumber) * Number(memoryNumber);
      setCurrentNumber(String(multiplication));
    }

    setMemoryNumber(currentNumber);
    setCurrentNumber("0");
  }

  const handleDivision = () => {
    setOperation("/");

    if (flagResult) {
      const division = Number(memoryNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
    }

    setMemoryNumber(currentNumber);
    setCurrentNumber("0");
  }
  
  const handleResult = () => {
    setFlagResult(true);

    if (operation === "+") {
      setOperation("");

      const sum = Number(currentNumber) + Number(memoryNumber);
      setCurrentNumber(String(sum));
    }

    if (operation === "-") {
      setOperation("");

      const subtraction = Number(memoryNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction));
    }

    if (operation === "x") {
      setOperation("");

      const multiplication = Number(currentNumber) * Number(memoryNumber);
      setCurrentNumber(String(multiplication));
    }

    if (operation === "/") {
      setOperation("");

      const division = Number(memoryNumber) / Number(currentNumber);
      if (isNaN(division) || !isFinite(division)) {
        setCurrentNumber("Error");
        return;
      }
        
      setCurrentNumber(String(Math.round(division * 1000) / 1000));
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
          <Button label="/" onClick = {() => handleDivision()}/>
        </Row>
        <Row>
          <Button label="4" onClick = {() => handleAddNumber("4")}/>
          <Button label="5" onClick = {() => handleAddNumber("5")}/>
          <Button label="6" onClick = {() => handleAddNumber("6")}/>
          <Button label="x" onClick = {() => handleMultiplication()}/>
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
