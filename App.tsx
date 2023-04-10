import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/components/screen";
import Button from "./src/components/buttons/Buntton";
import Display from "./src/components/screen";
function name(name: string) {
  name = "Gilson";
  console.log(name);
  return name;
}

export default function App() {
  const [value] = useState('0');
  return (
    <View style={styles.container}>
      <Display value={value}/>
      <View style={styles.buttons}>
        <Button _name="AC" _onClick={name}  _triple ={true} />
        <Button _name="/" _onClick={name} _operation={true}/>
        <Button _name="7" _onClick={name} />
        <Button _name="8" _onClick={name} />
        <Button _name="9" _onClick={name} />
        <Button _name="*" _onClick={name} _operation={true} />
        <Button _name="4" _onClick={name} />
        <Button _name="5" _onClick={name} />
        <Button _name="6" _onClick={name} />
        <Button _name="-" _onClick={name} _operation={true} />
        <Button _name="1" _onClick={name} />
        <Button _name="2" _onClick={name} />
        <Button _name="3" _onClick={name} />
        <Button _name="+" _onClick={name} _operation={true}/>
        <Button _name="0" _onClick={name} />
        <Button _name="." _onClick={name} />
        <Button _name="=" _onClick={name}  _double = {true}  />
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
