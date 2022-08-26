import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import React from 'react'

const TopBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> {}}>
        <Text style={styles.text}>Load</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> {}}>
        <Image source={require('../assets/theme.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 20,
    height: 20
  },
  text: {
    fontSize: 16,
  }
})
export default TopBar
