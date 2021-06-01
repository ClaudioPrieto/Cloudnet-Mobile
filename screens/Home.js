import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import * as Device from 'expo-device';


const HandlePressEvent = () => console.log("Text pressed")

const Home = () =>{
  const [model, setModel] = React.useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={{
          height: 100,
          width: 100
        }}
        source={require('../assets/cloudnet-logo.png')}
      />
      <Text onPress={HandlePressEvent}>Modelo del dispositivo:{model}</Text>
      <Button 
        title="Obtener información del dispositivo" 
        onPress={()=> setModel( Device.modelName )}>
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

export default Home;