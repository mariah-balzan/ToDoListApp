# cis3186-material.io Presentation

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
2. Create addTodo function. This will allow user inputs from keyboard and once button is pushed, it will populate list
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
