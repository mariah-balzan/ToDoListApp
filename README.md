# CIS3186-material.io Presentation

This ToDoListApp aims to show you how to integrate Material.io components. 

# Team 2
> Mariah Balzan,
> Nicole Bezzina,
> Steve Galea

# Prerequisites
- Install master branch
- Make sure all required dependencies are installed
- Run expo start/ npx run start and test app (without added logic functionality)

We will be using material icons Google font Comfortaa for this project, as a demonstration of using Material.io components.
- npm i react-native-vector-icons
- npm i expo-font

# Package.json
Double check the package.json
Copy and paste any missing dependencies into your package.json:
   -  "@react-native-async-storage/async-storage": "^1.17.11",
   -  "expo": "~47.0.8",
   -  "expo-app-loading": "^2.1.1",
   -  "expo-font": "^11.0.1",
   -  "expo-splash-screen": "^0.17.5",
   -  "expo-status-bar": "~1.4.2",
   -  "react": "18.1.0",
  -   "react-native": "0.70.5",
  -   "react-native-vector-icons": "^9.2.0"

run npm install --force

# Adding logic functionality in App.jsx
1. Declare textInput state constant to store user input:
```
const[textInput, setTextInput] = useState('');
```
2. Create ```addTodo``` method. This will allow user inputs from keyboard and once button is pushed, it will populate list
```
const addTodo = () => {

}
```
3. In Footer section call state setter. Should look as follows: 
```
<TextInput placeholder="Add To Do" 
         style={{fontFamily:'Comfortaa'}}
         value = {textInput}
          onChangeText={text => setTextInput(text)}
/> 
```
4. Call ```addTodo``` method in iconContainer. Should look as follows: 
```
 <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
          <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
```
5. Inside addTodo method, add ```if statement``` to not allow null todos
```
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
```
6. Create ```markToDoComplete``` method

```
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
```
7. Call todo id if completed from ```ListItem```. Should look as follows:

```
{!todo?.completed && (
        <TouchableOpacity style={[styles.actionIcon, {backgroundColor:'green'}]} onPress={() => markToDoComplete(todo?.id)}>
          <Icon name="done" color={COLORS.white} size={30} />
        </TouchableOpacity>
        )}
```  
8. Create ```deleteTodo``` method

```
const deleteTodo = (todoId) => {
    const newTodos = todos.filter(item => item.id != todoId);
    // Set todos as an empty array
    setTodos(newTodos);
  }
```
9. Call todo id if de from ```ListItem```. Should look as follows:
```
<TouchableOpacity style={styles.actionIcon} onPress = {() => deleteTodo(todo?.id)}>
          <Icon name="delete" color={COLORS.white} size={26} />
        </TouchableOpacity>
```  
10. Create ```clearTodos``` method
```
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
```  
