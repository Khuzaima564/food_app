import { HStack, NativeBaseProvider } from 'native-base'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../assets/helper/Helper'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Header() {
    return (
        <NativeBaseProvider>
            <HStack justifyContent={'space-between'}>
                <HStack alignItems={'center'}>
                    <View style={styles.leftIconView}>
                        <Ionicons name='location-outline' size={20} color={colors.red} />
                    </View>
                    <Text style={styles.txt}>
                        Deliverd to{'\n'}
                        <Text style={styles.txtbold}>Your Address</Text>
                    </Text>
                </HStack>

                <HStack alignItems={'center'}>
                <Ionicons name='notifications' size={30} color={colors.red} />

                    <Image source={require('../../assets/images/potrait.jpg')} style={styles.img} />
                </HStack>
            </HStack>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    leftIconView: { backgroundColor: colors.yellow, height: '100%', width: '25%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    txt: { marginLeft: 10, fontSize: 13, color: 'grey',  },
    txtbold: { fontSize: 14, color: colors.black, fontWeight: '600' },
    img: { width: 40, height: 40 , borderRadius: 50, marginLeft: 15}
})