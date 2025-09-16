import { HStack, Input, NativeBaseProvider, VStack } from 'native-base'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../assets/helper/Helper'
export default function Login({navigation}) {


  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.main}>
        <AntDesign name={'arrowleft'} size={25} color={'black'} onPress={() => navigation.goBack()} />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.heading}>Welcome Back!</Text>
          <Text style={styles.txtSub}>Sign in to explore your favorite pastries and exclusive deals.</Text>


          <VStack my={10} space={5}>

            <Input

              placeholder='Enter you email address'
              color={colors.black}
              p={4}
              borderRadius={50}
              InputLeftElement={<AntDesign name={'user'} size={20} color={'grey'} style={styles.icon} />}
            />
            <Input

              placeholder='Enter your passsword'
              color={colors.black}
              p={4}
              borderRadius={50}
              InputLeftElement={<AntDesign name={'lock'} size={20} color={'grey'} style={styles.icon} />}
            />


          </VStack>

          <TouchableOpacity style={styles.btn1} onPress={()=> navigation.replace("Home")}>
            <Text style={styles.btntxt1}>Sign in</Text>
          </TouchableOpacity>


          <Text style={[styles.txtSub, { textAlign: 'center' }]}>Don't have an account?{' '}<Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.replace("Register")}>Sign up</Text></Text>
          <Text style={[styles.txtSub, { textAlign: 'center' ,textDecorationLine: 'underline'}]}>Forgot Password</Text>
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
  txtSub: { color: 'grey', fontFamily: 'PTSerif-Regular', fontSize: 15, marginTop: '5%' },


})