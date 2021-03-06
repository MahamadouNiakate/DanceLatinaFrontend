import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./src/containers/HomeScreen";
import ListSoirees from "./src/containers/ListSoirees";
import ListCours from "./src/containers/ListCours";
import ListFestival from "./src/containers/ListFestival";
import AuthLoadingScreen from "./src/containers/AuthLoadingScreen";
import SignInScreen from "./src/containers/SignInScreen";
import DescSoirees from "./src/containers/DescSoirees";
import SignUpScreen from "./src/containers/SignUpScreen";

const AppStack = createStackNavigator({
  // Tab: TabNavigator,
  Home: HomeScreen,
  Lists: ListSoirees,
  Cours: ListCours,
  Festival: ListFestival,
  Description: DescSoirees
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const AuthUpStack = createStackNavigator({ SignUp: SignUpScreen });
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Home: HomeScreen,
      App: AppStack,
      Auth: AuthStack,
      AuthUp: AuthUpStack
    },
    {
      initialRouteName: "Home"
    }
  )
);
