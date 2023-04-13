import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../Screens/redux/reducers/userReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AddFournitureScreen from '../Screens/AddFurnitureScreen/AddFournitureScreen';
import AvailabilityScreen from '../Screens/AvailabilityScreen/AvailabilityScreen';
import ChooseCategory from '../Screens/ChooseCategoryScreen/ChooseCategoryScreen';
import LocationScreen from '../Screens/LocationScreen/LocationScreen';

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const Navigation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/v1/fournitures');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AddFourniture"
            component={AddFournitureScreen}
            options={{
              title: 'add fourniture',
              headerTitleStyle: {
                color: '#3B71F3',
              },
            }}
          />
          <Stack.Screen
            name="ChooseCategory"
            component={ChooseCategory}
            options={{
              title: 'Choose Category',
              headerTitleStyle: {
                color: '#3B71F3',
              },
            }}
          />
          <Stack.Screen
            name="Availability"
            component={AvailabilityScreen}
            options={{
              title: 'Availability',
              headerTitleStyle: {
                color: '#3B71F3',
              },
            }}
          />
          <Stack.Screen
            name="Location"
            component={LocationScreen}
            options={{
              title: 'Location',
              headerTitleStyle: {
                color: '#3B71F3',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerTitleStyle: {
                color: '#3B71F3',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
