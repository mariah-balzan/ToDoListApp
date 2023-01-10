# CIS3186-material.io Presentation

This ToDoListApp aims to show you how to integrate Material.io components. We will be focusing specifically to add a font. If we have time, we will then integrate other components such as buttons.

# Team 2
> Mariah Balzan,
> Nicole Bezzina,
> Steve Galea

# Part 1: Setup | Example 1: using Material Icons | Notes on Accessibility & UI Choice (Time required: 5-10 mins)

# Prerequisites
- Install master branch
- Make sure all required dependencies are installed
- Run expo start/ npx run start and test app (without added logic functionality)

We will be using material icons Google font Comfortaa for this project, as a demonstration (in Part 1) of using Material.io components. 
```
npm i react-native-vector-icons
```

We will then use another material library, and adapt our code together (in Part 3) [ https://www.react-native-material.com/docs/components/ ] 
```
npm i @react-native-material/core
```

Other dependencies needed
```
npm i expo-font
```
```
npm i expo
```
```
npm i expo-app-loading
```
```
npm i expo-splash-screen
```
```
npm i expo-status-bar
```
```
npm i react
```
```
npm i react-native
```
```
npm i @react-native-async-storage/async-storage
```

# Package.json 
Double check the package.json
Copy and paste any missing dependencies into your package.json:
   -  "@react-native-async-storage/async-storage": "^1.17.11",
   -  "@react-native-material/core": "^1.3.7",
   -  "expo": "~47.0.8",
   -  "expo-app-loading": "^2.1.1",
   -  "expo-font": "^11.0.1",
   -  "expo-splash-screen": "^0.17.5",
   -  "expo-status-bar": "~1.4.2",
   -  "react": "18.1.0",
  -   "react-native": "0.70.5",
  -   "react-native-vector-icons": "^9.2.0"
[skip if every dependency was installed well]
```
npm install --force or npm i <<dependency>>
```

# Note: Accessibility & User interface notes
every icon is a circle (easy to click)
- colours contrast well to each other
- icons are descriptive enough 
- emphasis on simple screens
- easy to read text- ample line spacing and padding
- font size and weight are well chosen

# Part 2: Adding Logic (Time required: 5-10 mins)
Do all below while running
```expo start```

#     Go to App.jsx
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

Notes: Now we have a fully functional todolist application.
- application is ready for part 3...

# Part 3: Adding additional components (example, add a button...)
Consider you would like to add a react native button (refer to below link)
```https://www.react-native-material.com/docs/components/button```

Import your button:
```
import { Button } from "@react-native-material/core";
```

We would like this button to become outlined and to replace our clear todos icon in the top right -> locate Delete Icon```<Icon name="delete" size={30} color="red" onPress={clearTodos}/>
      ``` and replace it with the below
-```<Button
      variant="outlined"
      title="Delete"
      color='red'
      onPress={clearTodos}
      leading={(<Icon name="delete" />)}
    />```

# Other Remarks: See below link of activity indicators, such as loading: 
- Refer to https://www.react-native-material.com/docs/components/activity-indicator and https://www.react-native-material.com/docs/components/button#loading

# Thank you for your attention...
