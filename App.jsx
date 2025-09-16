import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NativeBaseProvider } from 'native-base'
import { View, Text } from 'react-native'
import Splash from './src/components/splash/Splash'
import Login from './src/components/auth/login/Login'
import Intro from './src/components/splash/Intro'
import Register from './src/components/auth/register/Register'
import Tab from './src/navigation/Tab'

const App = () => {

  const Stack = createStackNavigator()
  return (

    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
        <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}/>
        <Stack.Screen name='Intro' component={Intro}  options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register}  options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Tab}  options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>

  )
}
export default App