import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  TouchableHighlight,
  GestureResponderEvent,
  Button,
} from "react-native";
import React from "react";

type getProps = {
  _name: string;
  _onClick: (props: any) => string;
  _double?: boolean;
  _triple?: boolean;
  _operation?: boolean;
};

export default (props: getProps) => {
  let stylesButton: object = styles.button;
  if(props._double) stylesButton = styles.buttonDouble;
  if(props._triple) stylesButton = styles.buttonTriple;
  if(props._operation) stylesButton = styles.operationButton;
  return (
    <View>
      <TouchableHighlight onPress={props._onClick}>
        <Text style={stylesButton}>{props._name}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    fontSize: 40,
    padding: 20,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    color: "#FFF",
    backgroundColor: "#fa8231",
    fontSize: 40,
    padding: 20,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  buttonDouble: {
    fontSize: 40,
    padding: 20,
    height: Dimensions.get("window").width / 4,
    width: (Dimensions.get("window").width / 4) * 2,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  buttonTriple: {
    fontSize: 40,
    padding: 20,
    height: Dimensions.get("window").width / 4,
    width: (Dimensions.get("window").width / 4) * 3,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
});
