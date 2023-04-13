import { View, Text, Alert, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CheckBox } from 'react-native-elements';
import CustomButton from'../../Components/CustomButton/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ChooseCategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const [categories, setCategories] = useState([
    { title: 'pencil', isChecked: false },
    { title: 'pen', isChecked: false },
    { title: 'paper', isChecked: false },
    { title: 'notebook', isChecked: false },
    { title: 'rule', isChecked: false },
    { title: 'folder', isChecked: false },
    { title: 'corrector', isChecked: false },
    { title: 'glue', isChecked: false },
    { title: 'dictionary', isChecked: false },
    { title: 'calculator', isChecked: false },
    { title: 'apron', isChecked: false },
  ]);
  

  const onCategoryChecked = (index) => {
    const newCategories = [...categories];
    newCategories[index].isChecked = !newCategories[index].isChecked;
    setCategories(newCategories);
  };

  useEffect(() => {
    if (route.params && route.params.category) {
      setCategories(route.params.category);
    }
  }, [route.params]);

  const onSubmitPressed = () => {
    const selectedCategories = categories.filter((category) => category.isChecked);
    navigation.navigate('AddFourniture', { categories: selectedCategories });
  };

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FBFC' }}>
      <View>
        {categories.map((category, index) => (
          <CheckBox
            key={index}
            title={category.title}
            checked={category.isChecked}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => onCategoryChecked(index)}
          />
        ))}
      </View>
      <CustomButton
        text="Submit"
        onPress={handleSubmit(onSubmitPressed)}
      />
    </SafeAreaView>
  );
};

export default ChooseCategoryScreen;
