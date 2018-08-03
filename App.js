import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/home';
import ProfileScreen from './src/profile';
import PostsScreen from './src/posts';

Navigation.registerComponent("codingrevolution.HomeScreen", () => HomeScreen);
Navigation.registerComponent("codingrevolution.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent("codingrevolution.PostsScreen", () => PostsScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "codingrevolution.HomeScreen",
    title: "Home"
  }
})

