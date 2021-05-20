import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';

export default function App() {
  const HandlePressEvent = () => console.log("Text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={{
          height: 100,
          width: 100
        }}
        source={require('./assets/cloudnet-logo.png')}
      />
      <Text onPress={HandlePressEvent}>Press me maggot!</Text>
      <Button 
        color="red"
        title="Continue as Client" 
        onPress={()=> console.log("Continue as client")}>
      </Button>
      <Button 
        title="Login as Worker" 
        onPress={()=> console.log("Logueado como trabajador, mandar a menú login")}>
      </Button>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e6f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
