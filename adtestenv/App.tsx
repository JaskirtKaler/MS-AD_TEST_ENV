/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const { width, height } = Dimensions.get('window'); // screen widths and heights
type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<any>();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Login />
  );
}

const styles = StyleSheet.create({
  main:{
    backgroundColor : '#fff',
    width : width,
    height: height,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Login(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
   return(
      <View style={styles.main}>
        <Text>Testing</Text>
      </View>
   );
}

const loginStyles = StyleSheet.create({
  main:{
    backgroundColor : '#fff',
    width:  width, 
    height: height, 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
