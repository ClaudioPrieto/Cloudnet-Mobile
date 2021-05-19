import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Peer from 'peerjs';
// import Peer from 'react-native-peerjs';
// import { io } from "socket.io-client";


export default function VideoCall() {
  const video = useRef(null);
  const [videoSource, setVideoSource] = useState();

  useEffect(() => {
    const fetchAndConnect = async () => {
      try {
        // map of localhost in VM is 10.0.2.2:3000 => localhost:3000
        const response = await fetch('http://10.0.2.2:3000/api')
        const { roomId } = await response.json();
        console.log(roomId)
/* 
        const peer = new Peer(undefined, {
          host: '10.0.2.2',
          secure: false,
          port: 3001,
          path: '/' 
        }); */
        


        // const socket = io('http://10.0.2.2:3000');

    
/*         peer.on('open', id => {
          socket.emit('join-room', roomId, id)
        }) */
  
/*         navigator
          .mediaDevices
          .getUserMedia({ video: true, audio: true})
          .then(stream => {
            console.log(stream)
            setVideoSource(stream)
          }
        )

        console.log(peer) */
      } catch(e) {
        console.log(e)
      }
    }

    fetchAndConnect()
  }, [])

  return (
    <View style={styles.container}>
      <Text>VideoCall</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
