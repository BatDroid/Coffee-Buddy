import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CoffeeVenues from "../../screens/CoffeeVenues";
import screens from './screens';

const AppNavigator = createStackNavigator(
    {
      [screens.coffeVenues]: CoffeeVenues,
    },
    {
      initialRouteName: screens.coffeVenues,
    }
  );

  export default createAppContainer(AppNavigator);