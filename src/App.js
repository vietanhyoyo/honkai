

import React from 'react';
import Login from './component/login/Login';
import Home from './component/home/Home';
import ErrorPage from './component/error/ErrorPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

export const AuthorContext = React.createContext();

const Stack = createNativeStackNavigator();
const reduxStore = createStore(rootReducer);

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
        <Provider store={reduxStore}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ErrorPage" component={ErrorPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthorContext.Provider>
    </>
  );
}

export default App;
