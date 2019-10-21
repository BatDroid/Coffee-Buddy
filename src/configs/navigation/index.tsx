import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CoffeeVenues from "../../screens/CoffeeVenues";
import CoffeeVenueDetail from '../../screens/CoffeeVenues/CoffeeVenueDetail';
import screens from './screens';

const AppNavigator = createStackNavigator(
    {
      [screens.coffeVenues]: CoffeeVenues,
      [screens.coffeVenueDetail]: CoffeeVenueDetail,
    },
    {
      initialRouteName: screens.coffeVenues,
    }
  );

  export default createAppContainer(AppNavigator);