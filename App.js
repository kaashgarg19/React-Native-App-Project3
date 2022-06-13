import React from 'react'

//Redux is an essential part of the React Native ecosystem.
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

// importing redux actions from reducers
//a reducer is a JavaScript function that takes two parameters actually current state of the application and an action.
import reducer from './reducers'

// Installing navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing all screens to app
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen';
import events from './screens/events';
import events_details from './screens/event_details';
import Profile from './screens/Profile';
import { ScreenStack } from 'react-native-screens'


// creating  the 'stack' navigator component
const Stack = createStackNavigator();


const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

// import all used images
const images = [
    require("./assets/icons/back.png"),
	require("./assets/images/avatar.png")

  ];
  
// App.js usually acts as the entry-point for your react-native app
export default class App extends React.Component {
	render() {
		// the 'NavigationContainer' component is used to hold the (stack) navigator component
        // ... which creates components for each of the screens..
        return(
			<Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator
        headerMode={false}
        initialRouteName="LoinScreen"
        screenOptions={{
          cardStyle: { backgroundColor: 'rgb(248, 248, 248)' },
        }}
      >
					<Stack.Screen name="LoginScreen" component={LoginScreen}/>
					<Stack.Screen name="SignupScreen" component={SignupScreen}/>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                    <Stack.Screen name="events" component={events}/>
                    <Stack.Screen name="events_details" component={events_details}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                     </Stack.Navigator>
            </NavigationContainer>
			</Provider>
        );
	}
}
