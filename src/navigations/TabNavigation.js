import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ShowAccountQRScreen } from "screens";

const iconSize = Platform.OS === "ios" ? 30 : 24;

class Acc1Screen extends React.Component {
  render() {
    return <ShowAccountQRScreen tabKey={"account1"} />;
  }
}

class Acc2Screen extends React.Component {
  render() {
    return <ShowAccountQRScreen tabKey={"account2"} />;
  }
}

class Acc3Screen extends React.Component {
  render() {
    return <ShowAccountQRScreen tabKey={"account3"} />;
  }
}

class Acc4Screen extends React.Component {
  render() {
    return <ShowAccountQRScreen tabKey={"account4"} />;
  }
}

const TabNavigation = createBottomTabNavigator(
  {
    Acc1Tab: {
      screen: Acc1Screen,
      navigationOptions: {
        tabBarLabel: "Account 1",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="numeric-1-box-outline"
            size={iconSize}
            color={tintColor}
          />
        )
      }
    },
    Acc2Tab: {
      screen: Acc2Screen,
      navigationOptions: {
        tabBarLabel: "Account 2",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="numeric-2-box-outline"
            size={iconSize}
            color={tintColor}
          />
        )
      }
    },
    Acc3Tab: {
      screen: Acc3Screen,
      navigationOptions: {
        tabBarLabel: "Account 3",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="numeric-3-box-outline"
            size={iconSize}
            color={tintColor}
          />
        )
      }
    },
    Acc4Tab: {
      screen: Acc4Screen,
      navigationOptions: {
        tabBarLabel: "Account 4",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="numeric-4-box-outline"
            size={iconSize}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? "#6C24AA" : "white",
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? "white" : "#6C24AA",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      showIcon: true,
      showLabel: Platform.OS === "ios" ? true : false
    }
  }
);

export default TabNavigation;
