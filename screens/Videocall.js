import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, Pressable, View, Animated, Button } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const Videocall = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [timer, setTimer] = useState(0);
  const [solicitud, setSolicitud] = useState(false);
  const [espera, setEspera] = useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true)

  const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={5}
      onComplete={() => {
        onPressNoHelper()
        return [true, 1500] // repeat animation in 1.5 seconds
      }}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  )

  function renderForm() {

    if(espera){  
      return (<View></View>);
    }

    if (solicitud) {
      return (<View></View>);
    }

    return(
      <View style={styles.centeredView}>
        <Text>Nuestros ejecutivos se encuentran ocupados en este momento.</Text>
        <Text>Por favor ingrese sus datos para ser contactado más tarde</Text>
        <TextInput 
          placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      )
  }

  function onPressHelper(){

        setSolicitud(true)
        setEspera(false)
        setIsPlaying(false)
        
    }

  function onPressNoHelper(){

      setSolicitud(false)
      setEspera(false)
      setModalVisible(false)

  }

  function resetStates(){
    setSolicitud(false)
    setEspera(true)
    setIsPlaying(true)

  }

  function receivedHelp(){
    if (solicitud) {    
            return (<Text style={styles.modalText}>Dirijase a la tablet de ayuda número: 3</Text>);  
    }

    return (
      <Text></Text>
      )
  }


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            {receivedHelp()}
            {UrgeWithPleasureComponent()}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar ventana</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onPressHelper()}
            >
              <Text style={styles.textStyle}>Simular atención de ejecutivo</Text>
            </Pressable>



          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Solicitar ayuda por videollamada</Text>
      </Pressable>

      {renderForm()}


      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => resetStates()}
      >
        <Text style={styles.textStyle}>Reiniciar Estados</Text>
      </Pressable>


    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Videocall;