import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { listNotifications } from '../redux/actions/notificationsActions';
import { getFournitures } from '../redux/actions/fournitureActions';

const HomeScreen = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [fournitures, setFournitures] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSearch = async () => {
    try {
      const result = await getFournitures(location, category);
      setFournitures(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = async () => {
    try {
      const result = await listNotifications();
      setNotifications(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Search Fournitures</Text>
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={handleLocationChange}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={handleCategoryChange}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={fournitures}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Notifications</Text>
      <Button title="Refresh" onPress={handleRefresh} />
      <FlatList
        data={notifications}
        renderItem={({ item }) => <Text>{item.message}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
