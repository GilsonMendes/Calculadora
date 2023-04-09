import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/home";
import Button from "./src/components/buttons/Buntton";
function name(name: string) {
  name = "Gilson";
  console.log(name);
  return name;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.buttons}>
        <Button _name="AC" _onClick={name} />
        <Button _name="/" _onClick={name} />
        <Button _name="7" _onClick={name} />
        <Button _name="8" _onClick={name} />
        <Button _name="9" _onClick={name} />
        <Button _name="*" _onClick={name} />
        <Button _name="4" _onClick={name} />
        <Button _name="5" _onClick={name} />
        <Button _name="6" _onClick={name} />
        <Button _name="-" _onClick={name} />
        <Button _name="1" _onClick={name} />
        <Button _name="2" _onClick={name} />
        <Button _name="3" _onClick={name} />
        <Button _name="+" _onClick={name} />
        <Button _name="0" _onClick={name} />
        <Button _name="." _onClick={name} />
        <Button _name="=" _onClick={name} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',

  }
});
