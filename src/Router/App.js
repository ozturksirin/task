import React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './Router';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 12,
      }}>
        <Router />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
