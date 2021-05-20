import React from 'react';
import {View, Text, Image} from 'react-native';

const Videocall = () => {
    return (
        <View>
            <Text>Aqui irá la videollamada</Text>
            <Image 
                style={{
                height: 300,
                width: 300
                }}
                source={{
                    uri: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19865369/Screen_Shot_2020_04_01_at_3.37.57_PM__1_.png',
                  }}
            />
        </View>
    );
}

export default Videocall;