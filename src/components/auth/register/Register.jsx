import { HStack, Input, NativeBaseProvider, VStack } from 'native-base'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../assets/helper/Helper'
export default function Register({navigation}) {
    const data = [
        { placeholder: 'Enter your full name', iconName: 'user', value: 'name' },
        { placeholder: 'Enter your email address', iconName: 'mail', value: 'email' },
        { placeholder: 'Create a password (5 digits)', iconName: 'lock', value: 'password' },
        { placeholder: 'Confirm your password', iconName: 'lock', value: 'confirmPassword' },
    ]

    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.main}>
                <AntDesign name={'arrowleft'} size={25} color={'black'} onPress={()=> navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.heading}>Register</Text>


                    <VStack my={10} space={5}>
                        {data.map((item, index) => (
                            <Input
                                key={index}
                                placeholder={item.placeholder}
                                color={colors.black}
                                borderWidth={1} 
                                style={{ outlineWidth: 0 }}

                                p={4}
                                borderRadius={50}
                                InputLeftElement={<AntDesign name={item.iconName} size={20} color={'grey'} style={styles.icon} />}
                            />))}


                    </VStack>

                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.btntxt1}>Register</Text>
                    </TouchableOpacity>

                    <HStack my={5} alignItems={'center'} space={4} justifyContent={'center'}>
                        <View height={2} backgroundColor={colors.lightgrey} width={'30%'} />
                        <Text style={{ color: 'grey' }}>or</Text>
                        <View height={2} backgroundColor={colors.lightgrey} width={'30%'} />

                    </HStack>

                    <HStack justifyContent={'space-around'} px={10}>
                        <AntDesign name={'apple1'} size={20} color={'black'} />
                        <AntDesign name={'facebook-square'} size={20} color={'blue'} />
                        <AntDesign name={'google'} size={20} color={colors.yellow} />

                    </HStack>

                    <Text style={styles.txtSub}>By Signing up you agree to our Terms of Services and Privacy Policy</Text>

                </View>

            </SafeAreaView>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    main: { backgroundColor: colors.white, padding: 15, flex: 1, },
    heading: { fontSize: 28, fontFamily: 'PTSerif-Bold', color: colors.black, marginTop: 20 },
    icon: { marginLeft: 15 },
    btn1: { backgroundColor: colors.red, height: 55, width: '100%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', padding: 2 },
    btntxt1: { color: colors.white, fontFamily: 'PTSerif-Regular', fontSize: 15 },
    txtSub: { color: 'grey', fontFamily: 'PTSerif-Regular', fontSize: 15, textAlign: 'center', marginTop: '5%' },


})