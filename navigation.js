import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const navigationContainer=()=>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default navigationContainer;