import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

const COLORS1 = {primary: '#00A0F3', white: '#fff', background:'#FAFBF4'};
const COLORS = {primary: '#00A0F3', white: '#fff', background:'#FAFBF4'};
export default function App() {
  let[fontsLoaded] = useFonts({
    'Comfortaa' : require('./assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf'),
})

  //Logic 2: State to store user input
  const[textInput, setTextInput] = useState('');

  const [todos, setTodos] = useState([
    {id:1, task:"First todo", completed: true},
    {id:2, task:"Second todo", completed: false},
    {id:3, task:"Third todo", completed: true},
    {id:4, task:"Fourth todo", completed: false},
    {id:5, task:"Fifth todo", completed: false},
    {id:6, task:"Sixth todo", completed: true},
    {id:7, task:"Seventh todo", completed: true},
    {id:8, task:"Eight todo", completed: false},
    {id:9, task:"Ninth todo", completed: false},
    {id:10, task:"Tenth todo", completed: true},
    {id:11, task:"Eleventh todo", completed: true}
  ])

  //Logic 1: User inputs from keyboard and once button is pushed, it will populate list
  const addTodo = () => {
    //Logic 6: If statement to only allow not empty todos
      if(textInput ==""){
        Alert.alert("Error: Empty todo", "Please input todo :)")
      }else{
            //Check that button works on press
            console.log(textInput)
            // Logic 5
            const newTodo = {
              id:Math.random(),
              task: textInput, 
              completed: false,
            };
            // This will keep the previous todos and the new inputs
            setTodos([...todos, newTodo])
          }
  }

  //Logic 7: Mark todos as complete
  const markToDoComplete = todoId => {
    //Logic 9:
      //Check that id is correct in console first 
      //console.log(todoId)
      //Functionaility:
      const newTodosItem = todos.map(item => {
        if(item.id == todoId){
            return{...item, completed:true}
        }
        return item
      })
      setTodos(newTodosItem)
  }

  //Logic 10:
  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(item => item.id != todoId);
    // Set todos as an empty array
    setTodos(newTodos);
  }

  //Logic 12
  const clearTodos = () => {
    //console.log("empty")
    Alert.alert("Confirm?", "Clear To Do List?",[
      {text: "Yes",
      onPress: () => setTodos([])
    },
      {text: "No",
    }
    ])
  }
  
  const ListItem = ({todo}) =>{
    return (<View style = {styles.listItem}>
      <View style={{flex:1}}>
        <Text 
          style={[styles.item, { textDecorationLine: todo?.completed ? 'line-through' : 'none'}]}>
            {todo?.task}
          </Text>
        </View>
        {/* Logic 8: Hide todo check mark if completed */}
        {!todo?.completed && (
        <TouchableOpacity style={[styles.actionIcon, {backgroundColor:'green'}]} onPress={() => markToDoComplete(todo?.id)}>
          <Icon name="done" color={COLORS.white} size={30} />
        </TouchableOpacity>
        )}
        {/* Logic 11: Add on Press */}
        <TouchableOpacity style={styles.actionIcon} onPress = {() => deleteTodo(todo?.id)}>
          <Icon name="delete" color={COLORS.white} size={26} />
        </TouchableOpacity>
    </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header section */}
      <View style = {styles.header}>
      <Text style = {styles.title}>To Do List</Text>
      <Icon name="delete" size={30} color="red" onPress={clearTodos}/>
      </View>

      {/* To do Cards in FlatList*/}
      <FlatList 
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{padding:20, paddingBottom:100}}
      data = {todos} 
      renderItem={({item}) => <ListItem todo ={item} />}
      />

<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" }>
     {/* Footer Section */}
     <View style={styles.footer}>
         <View style={styles.inputContainer}> 
         {/* logic 3:  */}
         <TextInput placeholder="Add To Do" 
         style={{fontFamily:'Comfortaa'}}
         value = {textInput}
          onChangeText={text => setTextInput(text)}
        /> 
        </View>
        
        {/* Button */}
        {/* Logic 4 */}
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
          <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    flexDirection: 'column',
    justifyContent:'center'
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
    color:'#3E424B',
    fontFamily:'Comfortaa'
  },
  item:{
    flexDirection:'row',
    fontWeight:'bold', 
    fontFamily:'Comfortaa',
    fontSize:17, 
    color:'black'
  },
      footer:{
        position: 'relative',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      inputContainer:{
        flexDirection:'row',
        elevation:40,
        flex:1,
        height:50,
        marginVertical:20,
        marginRight:20,
        borderRadius:30,
        paddingHorizontal:20,
        borderColor:'#3E424B',
        borderWidth:1,
        backgroundColor: COLORS.white,
      },
      iconContainer:{
        height:50,
        width:50,
        backgroundColor:COLORS.primary,
        borderRadius:25,
        elevation:40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      listItem:{
        padding: 20,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 10,
        marginVertical: 10,
        shadowOpacity:0.1
      },
      actionIcon:{
        height: 34,
        width: 34,
        borderRadius:25,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        color:'red',
        marginHorizontal:10,
      }
});
