import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const COLORS = {primary: '#00A0F3', white: '#fff', background:'#FAFBF4'};

export default function App() {

  const [todos, setTodos] = React.useState([
    {id:1, task:"First todo", completed: true},
    {id:2, task:"Second todo", completed: false},
    {id:3, task:"Third todo", completed: true},
    {id:4, task:"Fourth todo", completed: false},
    {id:5, task:"Fifth todo", completed: false},
    {id:6, task:"Sixth todo", completed: true},
    {id:7, task:"Seventh todo", completed: true},])
  
  const ListItem = ({todo}) =>{
    return (<View style = {styles.listItem}>
      <View style={{flex:1}}>
        <Text 
          style={{
            fontWeight:'bold', 
            fontSize:16, 
            color:'black' ,
            textDecorationLine: todo?.completed ? 'line-through' : 'none',}}>
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
      footer:{
        position: 'relative',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      inputContainer:{
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
