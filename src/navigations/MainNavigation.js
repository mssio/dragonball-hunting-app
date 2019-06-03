import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { InputAccountScreen } from "screens";
import TabNavigation from "./TabNavigation";

const MainNavigation = createSwitchNavigator({
  Input: {
    screen: InputAccountScreen
  },
  Show: {
    screen: TabNavigation
  }
});

export default createAppContainer(MainNavigation);
