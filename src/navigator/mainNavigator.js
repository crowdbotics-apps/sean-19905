import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList95738Navigator from '../features/ArticleList95738/navigator';
import ArticleList95737Navigator from '../features/ArticleList95737/navigator';
import ArticleList95736Navigator from '../features/ArticleList95736/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList95738: { screen: ArticleList95738Navigator },
ArticleList95737: { screen: ArticleList95737Navigator },
ArticleList95736: { screen: ArticleList95736Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
