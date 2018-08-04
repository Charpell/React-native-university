import { Navigation } from 'react-native-navigation';

import HomeIcon from './assets/icons/home.png';
import MenuIcon from './assets/icons/menu.png';

const loadTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "codingrevolution.ProfileScreen",
        label: "Profile",
        title: "Profile",
        icon: HomeIcon,
        navigatorStyle: {
            navBarTextColor: 'red',
            navBarBackgroundColor: 'black'
        },
        navigatorButtons: {
          leftButtons: [
            {
              title: "Drawer",
              id: "DrawerButton",
              icon: MenuIcon
            }
          ]
        }
      },
      {
        screen: "codingrevolution.PostsScreen",
        label: "Post",
        title: "Post",
        icon: HomeIcon,
        navigatorButtons: {
          leftButtons: [
            {
              title: "Drawer",
              id: "DrawerButton",
              icon: MenuIcon
            }
          ]
        }
      },
      {
        screen: "codingrevolution.ContactsComponent",
        label: "Contacts",
        title: "Contacts",
        icon: HomeIcon,
        navigatorButtons: {
          leftButtons: [
            {
              title: "Drawer",
              id: "DrawerButton",
              icon: MenuIcon
            }
          ]
        }
      }
    ],
    drawer: {
      left: {
        screen: "codingrevolution.SidedrawerComponent",
        fixedWidth: 500
      }
    }
  })
}

export default loadTabs;
