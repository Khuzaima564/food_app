import { HStack, Input, NativeBaseProvider, VStack } from 'native-base'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../assets/helper/Helper'
import Popular from '../Popular'
import { FlatList } from 'react-native-gesture-handler'
export default function Shop() {

    const menuData = [
        { name: 'Beef Burger', order: 'Popular order', price: '6$', ranking: '4.8 ⭐', image: require('../../../assets/images/img01.jpg') },
        { name: 'Burger', order: 'Not Popular', price: '2$', ranking: '3.1 ⭐', image: require('../../../assets/images/img02.jpg') },
        { name: 'Pizza', order: 'Popular', price: '8$', ranking: '4.5 ⭐', image: require('../../../assets/images/img03.jpg') },
        { name: 'Pizza cheese', order: 'Popular', price: '12$', ranking: '4.0 ⭐', image: require('../../../assets/images/img04.jpg') },
        { name: 'Chocolate Fudge Brownies', order: 'Popular', price: '2$', ranking: '4.9 ⭐', image: require('../../../assets/images/img07.jpg') },
        { name: 'Pasta', order: 'Popular', price: '6$', ranking: '4.0 ⭐', image: require('../../../assets/images/img05.jpg') },
        { name: 'Cinnamon Donuts', order: 'Popular', price: '3$', ranking: '3.5 ⭐', image: require('../../../assets/images/img06.jpg') },
        { name: 'Dark Choclate Cookies', order: 'Popular', price: '4$', ranking: '3.9 ⭐', image: require('../../../assets/images/img08.jpg') },
    ]

    const menuRender = ({ item }) => {
        return (
            <View style={styles.listView}>
                <HStack justifyContent={'space-between'}>

                    <View style={{ width: '85%' }}>
                        <HStack alignItems={'center'}>
                            <Image source={item.image} style={styles.image} />
                            <VStack ml={2}>
                                <Text style={[styles.txt, { fontWeight: '700' }]}>{item.name}</Text>
                                <Text style={styles.txt}>{item.order}</Text>
                                <Text style={styles.txt}>{item.ranking}</Text>
                            </VStack>
                        </HStack>
                    </View>

                    <VStack justifyContent={'space-between'}>
                        <AntDesign name={'heart'} color={colors.red} size={20} />
                        <Text style={{ color: colors.black }}>{item.price}</Text>

                    </VStack>
                </HStack>

            </View>
        )
    }
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.main}>
                <View style={{ height: '10%' }}>
                    <Header />

                </View>

                <Input
                    placeholder='What whould you like to eat?'
                    my={2} mx={2} p={2} borderRadius={50}
                    InputLeftElement={<AntDesign name={'search1'} color={'black'} size={20} style={styles.icon} />}
                />


                <View style={{ height: '45%' }}>
                    <Popular />
                </View>


                <Text style={[styles.sectionHeading, { marginHorizontal: 10, marginBottom: 10 }]}>Explore Menu</Text>

                <FlatList
                    data={menuData}
                    renderItem={menuRender}
                    showsVerticalScrollIndicator={false}
                />


            </SafeAreaView>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    main: { padding: 10, flex: 1, backgroundColor: colors.white },
    icon: { marginLeft: 10 },
    sectionHeading: { fontWeight: '700', fontSize: 20, color: colors.black },
    listView: { padding: 10, alignSelf: 'center', width: '100%', borderRadius: 10, elevation: 2, marginBottom: 5, },
    image: { width: '20%', height: 60, borderRadius: 10 },
    txt: { color: colors.black, }


})