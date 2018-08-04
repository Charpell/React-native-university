import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// import HomeIcon from './assets/icons/home.png';
// import MenuIcon from './assets/icons/menu.png';

const loadTabs = () => {
  Promise.all([
      Icon.getImageSource('home', 20, 'white'),
      Icon.getImageSource('music', 20, 'white'),
      Icon.getImageSource('star', 20, 'white'),
      Icon.getImageSource('bars', 20, 'white')
  ]).then(sources =>{
      Navigation.startTabBasedApp({
          tabs: [
              {
                  screen: "codingrevolution.ProfileScreen",
                  label: "Profile",
                  title: "Profile",
                  icon: sources[0],
                  navigatorStyle:{
                      TextColor:'red',
                      navBarBackgroundColor:'black'
                  },
                  navigatorButtons:{
                      leftButtons:[
                          {
                              title:"Drawer",
                              id:"DrawerButton",
                              icon: sources[3]
                          }
                      ]
                  }
              },
              {
                  screen: "codingrevolution.PostsScreen",
                  label: "Post",
                  title: "Post",
                  icon: sources[1],
                  navigatorButtons:{
                      leftButtons:[
                          {
                              title:"Drawer",
                              id:"DrawerButton",
                              icon: sources[3]
                          }
                      ]
                  }
              },
              {
                  screen: "codingrevolution.ContactsComponent",
                  label: "Contacts",
                  title: "Contacts",
                  icon: sources[2], 
              }
          ],
          drawer:{
             left:{
                 screen: "codingrevolution.SidedrawerComponent",
                 fixedWidth:500
             } 
          }
      })
  })

}
export default loadTabs;
