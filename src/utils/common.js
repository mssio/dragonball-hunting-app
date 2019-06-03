import { StyleSheet } from "react-native";
import { iosBackgroundColor } from "constants/colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: iosBackgroundColor,
    justifyContent: "center",
    alignItems: "center"
  },
  top30: {
    marginTop: 30
  },
  top60: {
    marginTop: 60
  },
  bottom10: {
    marginBottom: 10
  }
});

export function isEmpty(input) {
  return (
    typeof input === "undefined" ||
    input === "" ||
    input === null ||
    (Array.isArray(input) && input.length === 0) ||
    (typeof input === "object" &&
      Object.keys(input).length === 0 &&
      input.constructor === Object) ||
    input.size === 0
  );
  // || (typeof(input) === 'object' && Immutable.Map.isMap(input) && input.isEmpty())
}
