import { HStack, NativeBaseProvider, VStack } from 'native-base'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/helper/Helper'
export default function Intro({navigation}) {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.main}>

                <View style={styles.imgView}>
                    <Image source={require('../../assets/images/pizza.png')} style={styles.image} />
                </View>
                <VStack alignItems={'center'} space={10} p={4}>
                    <Text style={styles.txtSub} >Welcome to Food app</Text>
                    <Text style={styles.heading}>Create an account</Text>
                    <Text style={styles.txtSub}>Join us for a delightful urban dining experience with the best pastries in town.</Text>
                    <HStack space={5} mt={10}>

                        <TouchableOpacity style={styles.btn1} onPress={()=> navigation.navigate('Register') }>
                           <Text style={styles.btntxt1} numberOfLines={1} ellipsizeMode='tail'>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn2} onPress={()=> navigation.navigate('Login') }>
                           <Text style={styles.btntxt2} numberOfLines={1} ellipsizeMode='tail'> Sign in</Text>
                        </TouchableOpacity>

                    </HStack>

                </VStack>


            </SafeAreaView>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: colors.white, alignItems: 'center', padding: 5 },
    image: { width: 200, height: 200 },
    imgView: { marginVertical: '20%', alignItems: 'center' },
    txtSub: { color: 'grey', fontFamily: 'PTSerif-Regular', fontSize: 15, textAlign: 'center' },
    heading: { fontSize: 22, fontFamily: 'PTSerif-Bold', color: colors.black, textAlign: 'center' },
    btn1: {backgroundColor: colors.red, height: '50%', width: '40%', borderRadius: 50, justifyContent:'center', alignItems: 'center', padding: 2},
    btntxt1: {color:colors.white, fontFamily: 'PTSerif-Regular', fontSize: 15},
    btn2: {backgroundColor: colors.white, height: '50%', width: '40%', borderRadius: 50, justifyContent:'center', alignItems: 'center', padding: 2, borderWidth: 1, borderColor: colors.red},
    btntxt2: {color:colors.red, fontFamily: 'PTSerif-Regular', fontSize: 15,}

})