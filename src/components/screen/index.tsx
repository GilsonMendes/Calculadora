import { Text, View, StyleSheet } from "react-native";
type display ={
  value: string;
}
export default (props:display) => {
  return (
    <View style={styles.display}>
      <Text 
      style={styles.displayValue}
      numberOfLines={1}
      >{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0, 0.6)",
    alignItems: "flex-end",
  },
  displayValue: {
    fontSize: 100,
    color: "#FFF",
  },
});
