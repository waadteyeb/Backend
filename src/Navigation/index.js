import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AddFurnitureScreen from '../Screens/AddFurnitureScreen/AddFurnitureScreen';
import AvailabilityScreen from '../Screens/AvailabilityScreen/AvailabilityScreen';
import ChooseCategory from '../Screens/ChooseCategoryScreen/ChooseCategoryScreen';
import LocationScreen from '../Screens/LocationScreen/LocationScreen';


const Stack = createStackNavigator();


const navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      
      <Stack.Screen name="Addfurniture" component={AddFurnitureScreen}
      options={{
        title:"add fourniture",
        headerTitleStyle:{
          color:"#3B71F3"
        }
        
      }} />
      <Stack.Screen name="ChooseCategory" component={ChooseCategory}
       options={{
        title:"Choose Category",
        headerTitleStyle:{
          color:"#3B71F3"
        }
      }}/>
      
      <Stack.Screen name="Availability" component={AvailabilityScreen} options={{
        title:"Availability",
        headerTitleStyle:{
          color:"#3B71F3"
        }
      }} />
      <Stack.Screen name="Location" component={LocationScreen}
      options={{
        title:"Location",
        headerTitleStyle:{
          color:"#3B71F3"
        }
      }} />
      <Stack.Screen name="Home" component={HomeScreen}
      options={{
        title:"Home",
        headerTitleStyle:{
          color:"#3B71F3"
        }
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default navigation;