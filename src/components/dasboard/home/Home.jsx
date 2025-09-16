import { HStack, Input, NativeBaseProvider } from 'native-base'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Header'
import { colors } from '../../../assets/helper/Helper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Popular from '../Popular'
export default function Home() {

  const todayData = [
    { name: 'Beef Burger', image: require('../../../assets/images/img01.jpg') },
    { name: 'Pasta', image: require('../../../assets/images/img05.jpg') },
    { name: 'Chicken Burger', image: require('../../../assets/images/img02.jpg') },
    { name: 'Pizza', image: require('../../../assets/images/img03.jpg') },
  ]


  const todayRender = ({ item }) => {
    return (
      <View style={{ width: 100, marginRight: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={item.image} style={{ width: 60, height: 60, borderRadius: 50 }} />
        <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.itemTxt, { marginTop: 5 }]}>{item.name}</Text>
      </View>

    )

  }


  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.main}>
        <View style={{ height: '10%' }}>
          <Header />
        </View>

        <View style={styles.searchBox}>
          <Text style={styles.boxTxt}>What can we bake fresh for you today?</Text>
          <Input
            placeholder='What whould you like to eat'
            p={3}
            my={5}
            borderRadius={30}
            bg={colors.white}
            color={colors.black}
            InputLeftElement={
              <AntDesign name={'search1'} color={colors.black} size={20} style={styles.inputIcon} />
            } />

        </View>

        <View style={styles.section}>

          <HStack alignItems={'center'} width={'90%'} alignSelf={'center'} mb={3} justifyContent={'space-between'}>
            <Text style={styles.sectionHeading}>Today's Specials</Text>
            <Text>Show all</Text>
          </HStack>

          <FlatList
            data={todayData}
            renderItem={todayRender}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

       <Popular/>



      </SafeAreaView>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  main: { padding: 10, flex: 1, backgroundColor: colors.white },
  searchBox: { backgroundColor: colors.red, width: '95%', alignSelf: 'center', borderRadius: 10, padding: 15 },
  boxTxt: { textAlign: 'center', fontWeight: '600', fontSize: 20, color: colors.white },
  inputIcon: { marginLeft: 10 },
  section: { justifyContent: 'center', marginTop: 25 },
  sectionHeading: { fontWeight: '700', fontSize: 20, color: colors.black },
  itemTxt: { color: colors.black, fontWeight: '500' },
})