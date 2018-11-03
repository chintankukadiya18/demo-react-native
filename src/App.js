import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";

import Login from "./screens/Login";
import FooterTabNavigation from "./components/Footer/tabNavigation";

const App = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: FooterTabNavigation }
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
