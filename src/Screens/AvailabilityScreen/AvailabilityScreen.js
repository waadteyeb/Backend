import { View, Text ,SafeAreaView,StyleSheet} from 'react-native'
import React,{useEffect,useState} from 'react';
import { CheckBox } from 'react-native-elements';
import CustomButton from'../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';

const AvailabilityScreen = () => {
  const navigation=useNavigation();

  const {control,handleSubmit,formState:{errors}}=useForm();
 
 
   const[daytime,setDaytime]=useState(false);
   const[weekday,setWeekday]=useState(false);
   const[weekends,setWeekends]=useState(false);
   const[flexible,setFlexible]=useState(false);
   const Daytimeavailability=()=>{
    setDaytime(true);
    setWeekday(false);
    setWeekends(false);
    setFlexible(false);
   
  };
  const Weekdayavailability=()=>{
    setDaytime(false);
    setWeekday(true);
    setWeekends(false);
    setFlexible(false);
   
  };
  const Weekendsavailability=()=>{
    setDaytime(false);
    setWeekday(false);
    setWeekends(true);
    setFlexible(false);
   
  };
  const Flexibleavailability=()=>{
    setDaytime(false);
    setWeekday(false);
    setWeekends(false);
    setFlexible(true);
   
  };
  const onSubmitPressed= ()=>{
    navigation.navigate('Addfurniture');
   };

  return (
    <SafeAreaView style={{  flex: 1,
      backgroundColor: '#F9FBFC'}}>
     <View  >
       <CheckBox
       title="Daytime on weekdays"
       
       checked={daytime}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Daytimeavailability}
       
       />
       <CheckBox
       title="Weekday evenings"
       
       checked={weekday}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Weekdayavailability}
       
       />
          <CheckBox
       title="Weekends"
       
       checked={weekends}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Weekendsavailability}
       
       />
          <CheckBox
       title="I am flexible"
       
       checked={flexible}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Flexibleavailability}
       
       />
       <CustomButton 
   text="Submit"
    onPress={handleSubmit(onSubmitPressed)}  />

       </View>
       </SafeAreaView>
 
  )}

export default AvailabilityScreen