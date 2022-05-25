

import React from 'react';
import Login from './component/login/Login';
import Home from './component/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const AuthorContext = React.createContext();

const Stack = createNativeStackNavigator();

const App = () => {

  const [author, setAuthor] = React.useState({
    access_token: ''
  });

  return (
    <>
      <AuthorContext.Provider value={{
        author,
        setAuthor
      }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthorContext.Provider>
    </>
  );
}

export default App;
