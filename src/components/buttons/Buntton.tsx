import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import React from "react";

type getProps = {
  _name: string;
  _onClick: (props?: any) => void;
  _double?: boolean;
  _triple?: boolean;
  _operation?: boolean;
};

export default (props: getProps) => {
  let stylesButton: object = styles.button;
  if (props._double) stylesButton = styles.buttonDouble;
  if (props._triple) stylesButton = styles.buttonTriple;
  if (props._operation) stylesButton = styles.operationButton;
  return (
    <View>
      <TouchableHighlight onPress={() => props._onClick(props._name)}>
        <Text style={stylesButton}>{props._name}</Text>
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
    backgroundColor: "#D1E3F9",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    color: "#FFF",
    backgroundColor: "#3390FF",
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
    backgroundColor: "#D1E3F9",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  buttonTriple: {
    fontSize: 40,
    color: '#FFF',
    padding: 20,
    height: Dimensions.get("window").width / 4,
    width: (Dimensions.get("window").width / 4) * 3,
    backgroundColor: "#14120F",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
});
