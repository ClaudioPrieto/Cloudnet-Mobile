import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Animated} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';

const Product = ({route, navigation}) => {

	const [product, setProduct] = React.useState(null);

	React.useEffect(() => {
		let {item} = route.params;

		setProduct(item)
	})

	function renderHeader(){
		return(
			<View style = {{flexDirection:'row'}}>

				<TouchableOpacity
					style={{
						width:50,
						paddingLeft:SIZES.padding * 2,
						justifyContent: 'center'
						}}
					onPress={() => navigation.goBack()}
				>
					<Image
                        source = {icons.back}
                        resizeMode = "contain"
                        style={{
                            width:30,
                            height:30,
                            }}
                    ></Image>
				</TouchableOpacity>
				

            <View style={styles.container2} >
                <View
                   style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }} 
                >
                    <Text style={{ ...FONTS.h3 }}>{product?.name}</Text>

                </View>
                    
            </View>
        </View>


		)
			

	}

    return (
        <SafeAreaView style={styles.container}>
        	
        	{renderHeader()}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    containerImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Product;