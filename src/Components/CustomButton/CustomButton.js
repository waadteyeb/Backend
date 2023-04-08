import { View, Text,StyleSheet,Pressable ,TouchableOpacity} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,
      styles[`container_${type}`],
      bgColor ?{backgroundColor:bgColor}:{}
      ]}>
        <Text style={[styles.text,
        styles[`text_${type}`], 
        fgColor ? {color:fgColor}:{}
        
        ]}>{text}</Text>
         <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
      </Pressable>
    )
  }
 

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#3B71F3',
    

    width:'100%',
    padding:20,
    marginVertical:3,

    alignItems:'flex-start',
    borderRadius:100,
   flexDirection:'row',
    justifyContent:'space-between'
  },

  container_SECONDARY :{
    backgroundColor:'white',

    borderColor:'#3B71F3',
    borderWidth:2,
  },
    

  
  container_PRIMARY:{
    backgroundColor:'#3B71F3',
    
  },
  container_TERITARY:{
    backgroundColor:'#F9FBFC',

  },

  text:{
    fontWeight:'bold',
    color:'white',
   

  },
  text_TERITARY:{
    color:'gray'

  },
  text_SECONDARY:{
    color:'#3B71F3',
  }
})

export default CustomButton;