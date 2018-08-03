import { Navigation } from 'react-native-navigation';

import HomeIcon from './assets/icons/home.png';


const loadTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "codingrevolution.HomeScreen",
        label: "Home",
        title: "Home",
        icon: HomeIcon
      },
      {
        screen: "codingrevolution.ProfileScreen",
        label: "Profile",
        title: "Profile",
        icon: HomeIcon
      },
      {
        screen: "codingrevolution.PostsScreen",
        label: "Post",
        title: "Post",
        icon: HomeIcon
      }
    ]
  })
}

export default loadTabs;
