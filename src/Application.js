import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import NavigationService from "navigations/NavigationService";

class Application extends Component {
  render() {
    const { Navigation } = this.props;

    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Navigation
            ref={navigatorRef =>
              NavigationService.setTopLevelNavigator(navigatorRef)
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  innerContainer: {
    flex: 1
  }
});

export default Application;
