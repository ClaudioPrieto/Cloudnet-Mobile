import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mediaDevices, RTCView } from 'react-native-webrtc';
// import Peer from 'peerjs';
// import Peer from 'react-native-peerjs';
// import { io } from "socket.io-client";


export default function VideoCall() {
  const video = useRef(null);
  const [userStream, setUserStream] = useState();

  useEffect(() => {
    const fetchAndConnect = async () => {
      try {
        // map of localhost in VM is 10.0.2.2:3000 => localhost:3000
/*         const response = await fetch('http://10.0.2.2:3000/api')
        const { roomId } = await response.json();
        console.log(roomId) */
        console.log('xd')
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
        try {
          const stream = await mediaDevices.getUserMedia({ video: true });
          setUserStream(stream);
        } catch(e) {
          console.error(e);
        }
      } catch(e) {
        console.log(e)
      }
    }

    fetchAndConnect()
  }, [])

  console.log(userStream)
  return (
    <View style={styles.container}>
      <Text>VideoCall</Text>
      <RTCView
        style={{height: 300, width: 300}}
        zOrder={20}
        objectFit={"cover"}
        streamURL={userStream?.toURL()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stream: {
    flex: 1
  }
});
