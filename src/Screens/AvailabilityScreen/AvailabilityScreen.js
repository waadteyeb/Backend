import { View, Text ,SafeAreaView,StyleSheet} from 'react-native'
import React,{useEffect,useState} from 'react';
import { CheckBox } from 'react-native-elements';
import CustomButton from'../../Components/CustomButton/CustomButton';
import { useNavigation ,useRoute } from '@react-navigation/native';
import{useForm} from 'react-hook-form';

const AvailabilityScreen = () => {
  const navigation=useNavigation();
  const route = useRoute();
  

  const {control,handleSubmit,formState:{errors}}=useForm();
 
  const [availability, setAvailability] = useState(null);
  useEffect(() => {
    if (route.params && route.params.availability) {
      setAvailability(route.params.availability);
    }
  }, [route.params]);

  const Daytimeavailability = () => {
    setAvailability('daytime');
  };

  const Weekdayavailability = () => {
    setAvailability('weekday');
  };

  const Weekendsavailability = () => {
    setAvailability('weekends');
  };

  const Flexibleavailability = () => {
    setAvailability('flexible');
  };

  const onSubmitPressed = () => {
    navigation.navigate('AddFourniture', { availability });
  };

  return (
    <SafeAreaView style={{  flex: 1,
      backgroundColor: '#F9FBFC'}}>
     <View  >
       <CheckBox
       title="Daytime on weekdays"
       
       checked={availability === 'daytime'}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Daytimeavailability}
       
       />
       <CheckBox
       title="Weekday evenings"
       
       checked={availability === 'weekday'}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Weekdayavailability}
       
       />
          <CheckBox
       title="Weekends"
       
       checked={availability === 'weekends'}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={Weekendsavailability}
       
       />
          <CheckBox
       title="I am flexible"
       
       checked={availability === 'flexible'}
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

export default AvailabilityScreen;
