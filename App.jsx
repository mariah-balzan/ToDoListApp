import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ScrollView } from 'react-native';
import React from 'react';
export default function App() {
  const [inputValue, setInputValue]= React.useState("");

  return (
    <SafeAreaView style={styles.container}>
           <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height" }>

          {/* Header section */}
    <View style = {styles.header}>
       <Text style = {styles.title}>To Do List</Text>
        <Image style = {styles.icons} name ="delete" source={require('./Vectors/delete.png')}  />
    </View>
    <ScrollView>
     <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
    <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text here' />
     {/* Footer Section */}
     <View style={styles.footer}>
         <View style={styles.inputContainer}> 
         <TextInput placeholder="Add Item"
        autoCapitalize='words'
        autoCorrect={true}
        keyboardType='default'
        returnKeyType="send"
        blurOnSubmit={true}/> 
        </View>
        
        <TouchableOpacity>
          <View style={styles.iconContainer}></View>
          {/* <Image style = {styles.icons} name ="add" source={require('./Vectors/plus.png')}  /> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
   
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FAFBF4',
    flexDirection:'column',
    justifyContent: 'center', //row
  },
  header:{
    padding: 20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  title:{
    fontWeight:'bold',
    fontSize: 32,
    color:'#00A0F3',
  },
  icons:{
    maxHeight:25,
    maxWidth:25,
  },
  input:{
    borderBottomColor: "green",
    borderBottomWidth: 2,
    alignSelf: "stretch",
    margin: 16,
    padding: 8
    },
    con:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
      footer:{
        position:'relative',
        bottom:0,
        color:'#fff',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-around',
        alignSelf:'stretch',
      },
      inputContainer:{
        backgroundColor:'#fff',
        elevation:40,
        flex:1,
        flexDirection:'row',
        height:50,
        marginVertical:20,
        marginRight:20,
        borderRadius:30,
        paddingHorizontal:20,
        borderColor:'#000066',
        borderWidth:0.8,
      },
      iconContainer:{
        height:50,
        width:50,
        backgroundColor:'#00A0F3',
        borderRadius:25,
        elevation:40,
        justifyContent:'center',
        alignItems:'center',
      },
});
