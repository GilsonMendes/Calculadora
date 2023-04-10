import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/components/screen";
import Button from "./src/components/buttons/Buntton";
import Display from "./src/components/screen";

function name() {
  return "S";
}

export default function App() {
  const [value, setValue] = useState("0");
  const clearMemory = () => {
    setValue("0");
  };
  const addDigit = (n: string) => {
    setValue(n);
  };

  const setOperation = (n:string) => {
    setValue(n);
  };

  return (
    <View style={styles.container}>
      <Display value={value} />
      <View style={styles.buttons}>
        <Button _name="AC" _onClick={clearMemory} _triple={true} />
        <Button _name="/" _onClick={setOperation} _operation={true} />
        <Button _name="7" _onClick={addDigit} />
        <Button _name="8" _onClick={addDigit} />
        <Button _name="9" _onClick={addDigit} />
        <Button _name="*" _onClick={setOperation} _operation={true} />
        <Button _name="4" _onClick={addDigit} />
        <Button _name="5" _onClick={addDigit} />
        <Button _name="6" _onClick={addDigit} />
        <Button _name="-" _onClick={setOperation} _operation={true} />
        <Button _name="1" _onClick={addDigit} />
        <Button _name="2" _onClick={addDigit} />
        <Button _name="3" _onClick={addDigit} />
        <Button _name="+" _onClick={setOperation} _operation={true} />
        <Button _name="0" _onClick={addDigit} _double={true} />
        <Button _name="." _onClick={addDigit} />
        <Button _name="=" _onClick={setOperation}  _operation={true}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
