import React from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NativeCalculator from './js/NativeCalculator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity
        onPress={() => {
          const sum = NativeCalculator.calculateSum(1, 2);
          Alert.alert('Sum', `${sum}`);
        }}>
        <Text style={{fontSize: 30, color: 'red'}}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          const sub = await NativeCalculator.calculateSub(2, 1);
          Alert.alert('Sub', `${sub}`);
        }}>
        <Text style={{fontSize: 30, color: 'red'}}>Sub</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
