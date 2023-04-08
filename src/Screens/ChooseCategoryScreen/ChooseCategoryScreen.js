import { View, Text,Alert,TextInput,SafeAreaView,StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react';
import { CheckBox } from 'react-native-elements';
import CustomButton from'../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';

const ChooseCategoryScreen = () => {
  const navigation=useNavigation();

 const {control,handleSubmit,formState:{errors}}=useForm();


  const[pencil,setPencil]=useState(false);
  const[pen,setPen]=useState(false);
  const[paper,setPaper]=useState(false);
  const[notebook,setNotebook]=useState(false);
  const[rule,setRule]=useState(false);
  const[folder,setFolder]=useState(false);
  const[corrector,setCorrector]=useState(false);
  const[glue,setGlue]=useState(false);
  const[dictionary,setDictionary]=useState(false);
  const[calculator,setCalculator]=useState(false);
  const[apron,setApron]=useState(false);
  
  const pencilCategory=()=>{
    setPencil(true);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const penCategory=()=>{
    setPencil(false);
    setPen(true);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const paperCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(true);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const notebookCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(true);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const ruleCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(true);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };

  const folderCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(true);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const correctorCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(true);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const glueCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(true);
    setDictionary(false);
    setCalculator(false);
    setApron(false);
  };
  const dictionaryCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(true);
    setCalculator(false);
    setApron(false);
  };
  const calculatorCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(true);
    setApron(false);
  };
  const apronCategory=()=>{
    setPencil(false);
    setPen(false);
    setPaper(false);
    setNotebook(false);
    setRule(false);
    setFolder(false);
    setCorrector(false);
    setGlue(false);
    setDictionary(false);
    setCalculator(false);
    setApron(true);
  };
  const onSubmitPressed= ()=>{
    navigation.navigate('Addfurniture');
   };
  return (
    <SafeAreaView style={{  flex: 1,
      backgroundColor: '#F9FBFC'}}>
     <View  >
       <CheckBox
       title="pencil"
       
       checked={pencil}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={pencilCategory}
       
       />
 
  <CheckBox
       title="pen"
       
       checked={pen}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={penCategory}
       
       />
    
<CheckBox
       title="paper"
       
       checked={paper}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={paperCategory}
       
       />

<CheckBox
       title="notebook"
      
       checked={notebook}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={notebookCategory}
       containerStyle={styles.checkbox}
       />

<CheckBox
       title="rule"
       
       checked={rule}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={ruleCategory}
       containerStyle={styles.checkbox}
       />

<CheckBox
       title="folder"
       
       checked={folder}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={folderCategory}
       containerStyle={styles.checkbox}
       />

<CheckBox
       title="corrector"
       
       checked={corrector}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={correctorCategory}
       containerStyle={styles.checkbox}
       />


<CheckBox
       title="glue"
       
       checked={glue}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={glueCategory}
       containerStyle={styles.checkbox}
       />

<CheckBox
       title="dictionary"
       
       checked={dictionary}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={dictionaryCategory}
       containerStyle={styles.checkbox}
       />

<CheckBox 
       title="calculator"
       
       checked={calculator}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={calculatorCategory}
       containerStyle={styles.checkbox}
       />

<CheckBox
       title="apron"
       
       checked={apron}
       checkedIcon="dot-circle-o"
       uncheckedIcon="circle-o"
       onPress={apronCategory}
       containerStyle={styles.checkbox}
       />
  <CustomButton 
   text="Submit"
    onPress={handleSubmit(onSubmitPressed)}  />
   

</View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
})



export default ChooseCategoryScreen