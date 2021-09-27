import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Timer from './features/Timer';

const App = () => {
  return (
    <SafeAreaProvider>
      <Timer />
    </SafeAreaProvider>
  );
};

export default App;
