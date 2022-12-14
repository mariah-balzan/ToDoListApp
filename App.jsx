import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from "expo-font";

const COLORS = {primary: '#00A0F3', white: '#fff', background:'#FAFBF4'};

export default function App() {

  let[fontsLoaded] = useFonts({
    'Comfortaa' : require('./assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf'),
    })

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

  const ListItem = ({todo}) =>{
    return (<View style = {styles.listItem}>
      <View style={{flex:1}}>
        <Text 
        style={[styles.item, { textDecorationLine: todo?.completed ? 'line-through' : 'none'}]}>
            {todo?.task}
          </Text>
        </View>
        <TouchableOpacity style={[styles.actionIcon, {backgroundColor:'green'}]}>
          <Icon name="done" color={COLORS.white} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon}>
          <Icon name="delete" color={COLORS.white} size={24} />
        </TouchableOpacity>
    </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header section */}
      <View style = {styles.header}>
      <Text style = {styles.title}>To Do List</Text>
      <Icon name="delete" size={30} color="red"/>
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
         <TextInput placeholder="Add To Do"
        /> 
        </View>
        
        <TouchableOpacity>
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
    color:'#00A0F3',
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
        flex:1,
        flexDirection:'row',
        elevation:40,
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
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginHorizontal:10,
      }
});
