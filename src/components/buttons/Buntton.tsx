import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";
import React from "react";

type getProps = {
  _name: string;
  _onClick:(props:any)=>string;
};

export default (props: getProps) => {
  return (
    <View>
      <TouchableHighlight onPress={props._onClick}>
        <Text style={styles.button}>{props._name}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    padding: 20,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
});
