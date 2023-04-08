
import React,{ useState }  from 'react';
import {View,Text,Image,StyleSheet,useWindowDimensions,ScrollView,TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';



const AddFurnitureScreen= ()=>{
 
 const {height}=useWindowDimensions();
 const navigation=useNavigation();

 const {control,handleSubmit,formState:{errors}}=useForm();
 const [imageUri, setImageUri] = useState(null);
 const [errorMessage, setErrorMessage] = useState(null);


 

 const onchoosecategoryPressed=(data)=>{
  
  navigation.navigate('ChooseCategory');
 }
 const onchooseavailabilityPressed= ()=>{
  navigation.navigate('Availability');
 };

 const onchooselocationPressed=()=>{
  navigation.navigate('Location');

 };
 const onCreatePressed=()=>{
  navigation.navigate('Home');

 };
 const handlePickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImageUri(result.uri);
  }
};

const handleTakePhoto = async () => {
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImageUri(result.uri);
  }
};


 return( 
<ScrollView showsVerticalScrollIndicator={false}>
 <View style={style.root}>
 <View style={style.imageContainer}>
  {imageUri ? (
    <Image source={{ uri: imageUri }} style={style.image} />
  ) : (
    <TouchableOpacity style={style.imagePlaceholder} onPress={handlePickImage}>
      <Text style={style.imagePlaceholderText}>Pick an image from your gallery</Text>
    </TouchableOpacity>
  )}
  <View style={style.imageButtonsContainer}>
    <TouchableOpacity style={style.imageButton} onPress={handleTakePhoto}>
      <Text style={style.imageButtonText}>Take a photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.imageButton} onPress={handlePickImage}>
      <Text style={style.imageButtonText}>Pick from gallery</Text>
    </TouchableOpacity>
  </View>
</View>


 
 <Text style={{  fontSize: 13,
      fontWeight: 'bold',
      color: '#3B71F3',
      lineHeight: 24,
      textAlign: 'center',
      fontFamily: 'Helvetica Neue', }}>
      Title of your ad
     </Text>
   <CustomInput 
   name="Title of your ad"
   placeholder="Title of your ad"
    control={control}
    rules={{required:'Title is required',minLength:{value:3,message:'Title should be minimum 3 characters long'}}}
     /><Text style={{ fontSize: 13,
      fontWeight: 'bold',
      color: '#3B71F3',
      lineHeight: 24,
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',}}>
      Description
     </Text>
   <CustomInput
   name="Description"
   placeholder="Description"
   type="SECONDARY"
   control={control}
   rules={{required:'Description is required',minLength:{value:3,message:'Description should be minimum 3 characters long'}}}
   />
    

   <CustomButton 
   text="Choose Category"
    onPress={handleSubmit(onchoosecategoryPressed)}  />

   <CustomButton 
   text="Availability" 
   onPress={onchooseavailabilityPressed} 
   />

   
   <CustomButton 
   text="object location" 
   onPress={onchooselocationPressed} 
    />
   
   <CustomButton 
   text="Create" 
   onPress={onCreatePressed} 
   type="SECONDARY"
   />
 </View>
</ScrollView> 
 );
}

const style=StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20,
  },
 
    imageContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 10,
      borderRadius: 100,
      resizeMode: 'cover',
    },
    imagePlaceholder: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderStyle: 'dashed',
      borderRadius: 100,
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    imagePlaceholderText: {
      color: '#ccc',
    },
    imageButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    imageButton: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 18,
      borderColor:'#3B71F3',
    borderWidth:2,
    },
    imageButtonText: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#3B71F3',
      lineHeight: 24,
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
    }
});
export default AddFurnitureScreen;