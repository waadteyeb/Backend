import React,{ useState } from 'react';
import {View,Text,Image,StyleSheet,useWindowDimensions,ScrollView,TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { categories } from '../ChooseCategoryScreen';
import { useNavigation,useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';






const AddFournitureScreen = () => {

  const [inputData, setInputData] =useState({
    title: '',
    description: '',
  });

  const route = useRoute();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { location } = route.params?.location|| {};
 
  const { availability } = route.params?.availability|| {};
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageUri, setImageUri] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const handleInputChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };
  const onSubmit = async () => {
    try {
      const category = categories[0]._id;
      const response = await axios.post('http://localhost:8000/api/v1/fournitures', {
        name: inputData['Title of your ad'],
        image: imageUri,
        location: location,
        availability: availability,
        description: inputData['Description'],
        category: category
      });
      console.log('New fourniture added successfully');
    } catch (error) {
      console.error(error);
    }
  };
    
 
  const onChooseCategoryPressed = () => {
    navigation.navigate('ChooseCategory');
  };

  const onChooseAvailabilityPressed = () => {
    navigation.navigate('Availability');
  };

  const onChooseLocationPressed = () => {
    navigation.navigate('Location');
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
       value={inputData.title}
       onChangeText={(value) => handleInputChange('title', value)}

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
       value={inputData.description}
       onChangeText={(value) => handleInputChange('description', value)}
       control={control}
       rules={{required:'Description is required',minLength:{value:3,message:'Description should be minimum 3 characters long'}}}
       />
        
    
       <CustomButton 
       text="Choose Category"
        onPress={handleSubmit(onChooseCategoryPressed)}  />
    
       <CustomButton 
       text="Availability" 
       onPress={onChooseAvailabilityPressed} 
       />
    
       
       <CustomButton 
       text="object location" 
       onPress={onChooseLocationPressed} 
        />
       
       
       <CustomButton text="Add Furniture" onPress={handleSubmit(onSubmit)} type="SECONDARY"/>
            {errorMessage && <Text style={style.errorMessage}>{errorMessage}</Text>}
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
    export default AddFournitureScreen;
            