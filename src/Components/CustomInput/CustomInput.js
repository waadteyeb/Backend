import { View, Text,StyleSheet,TextInput } from 'react-native';
import React,{useState}from 'react';
import{Controller} from 'react-hook-form';




const CustomInput = ({control,name,placeholder,rules= {},secureTextEntry},type="PRIMARY") => {
return(
  
  <Controller
  control={control}
  name={name}
  rules={rules}
  render={({field:{value,onChange,onBlur},fieldState:{error}}) =>(
<>
  <View style={[styles.container,{borderColor:error?'red':'#e8e8e8'}]}>
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      style={styles[`Input_${type}`]}
      secureTextEntry={secureTextEntry}
    /> 
  </View>

   {error&&(<Text style={{color:'red',alignSelf:'stretch'}}>{error.message ||'Error'}</Text>)}
</>
  )}




  />
  
)
    
  
};

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    height: 45,


    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:10,
    marginBottom: 10,


    paddingHorizontal:10,
    marginVertical:8,

  },
 


   
  input_PRIMARY:{
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 1,
  },
  input_SECONDARY:{
    height: 90,
    flex: 1,
    padding: 10,
    marginLeft: 5,
    alignContent:"center",

  },
})
export default CustomInput