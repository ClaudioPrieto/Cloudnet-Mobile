import React from 'react';
import {View, Image, Text} from 'react-native';

const Catalog = () => {
    return (
        <View>
            <Text>Aquí irá el catálogo</Text>
        

            <Image 
                style={{
                height: 600,
                width: 600
                }}
                source={require('../assets/catalog_example.png')}
            />
        </View>
        
    );
}

export default Catalog;