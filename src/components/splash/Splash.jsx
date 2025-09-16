import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../assets/helper/Helper';
export default function Splash({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Intro")
       
    }, 2000); 
    return () => clearTimeout(timer);
}, []);

  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Splash</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {flex: 1 , justifyContent: 'center', alignItems: 'center', backgroundColor: colors.red},
  txt: {fontFamily: 'DancingScript-Bold', color: colors.yellow, fontSize: 50}

})