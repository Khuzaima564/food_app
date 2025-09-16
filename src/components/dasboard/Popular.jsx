import { HStack, Input, NativeBaseProvider } from 'native-base'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../assets/helper/Helper'
export default function Popular() {

    const popularData = [
        { name: 'Beef Burger', image: require('../../assets/images/img01.jpg'), price: '6$', ranking: '⭐ 4.8' },
        { name: 'Pasta', image: require('../../assets/images/img05.jpg'), price: '5$', ranking: '⭐ 4.1' },
        { name: 'Pizza', image: require('../../assets/images/img03.jpg'), price: '8$', ranking: '⭐ 4.5' },
        { name: 'Chocolate Fudge Brownies', image: require('../../assets/images/img07.jpg'), price: '2$', ranking: '⭐ 4.9' },
        { name: 'Dark Chocolate Cookies', image: require('../../assets/images/img08.jpg'), price: '4$', ranking: '⭐ 3.9' },

    ]
    const popularRender = ({ item }) => {
        return (
            <View style={styles.cardView} >
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.absoluteView}>
                    <Text style={{ color: colors.black, fontSize: 11 }} numberOfLines={1} ellipsizeMode='tail'>Available</Text>
                </View>
                <HStack alignItems={'center'} justifyContent={'space-between'} p={2}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.itemTxt}>{item.name}</Text>
                    <Text style={styles.itemTxt}>{item.price}</Text>
                </HStack>
                <Text style={{ color: 'grey' }}>{item.ranking}</Text>

            </View>

        )
    }
    return (
        <NativeBaseProvider>
            <View style={styles.section}>
                <Text style={[styles.sectionHeading, { marginHorizontal: 10, marginBottom: 10 }]}>Popular</Text>

                <FlatList
                    data={popularData}
                    renderItem={popularRender}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    section: { justifyContent: 'center', marginTop: 25 },
    sectionHeading: { fontWeight: '700', fontSize: 20, color: colors.black },
    itemTxt: { color: colors.black, fontWeight: '500' },
    cardView: { padding: 10, height: 250, width: 250, margin: 3, borderRadius: 10, borderWidth: 1, borderColor: colors.red },
    absoluteView: { position: 'absolute', backgroundColor: 'rgb(229, 217, 217)', top: 20, left: 20, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 10 },
    cardImage: { width: '100%', height: '75%', alignSelf: 'center', marginTop: 2, position: 'relative' }

})