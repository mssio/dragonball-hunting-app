import React from "react";
import { StyleSheet, View } from "react-native";
import "utils/enableFontPatch";
import MainNavigation from "navigations/MainNavigation";
import Application from "Application";

export default class App extends React.Component {
  render() {
    const { notification } = this.props.exp;

    return (
      <View style={styles.container}>
        <Application Navigation={MainNavigation} notification={notification} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
