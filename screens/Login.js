import React from 'react';
import {View, Text, Image} from 'react-native';

const Login = () => {
    return (
        <View>
            <Text>Aqui irá el login</Text>
            <Image 
                style={{
                height: 100,
                width: 100
                }}
                source={{
                    uri: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19865369/Screen_Shot_2020_04_01_at_3.37.57_PM__1_.png',
                  }}
            />
        </View>
    );
}

export default Login;