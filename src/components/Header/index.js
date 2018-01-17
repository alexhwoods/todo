import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          blurOnSubmit={false}
          placeholder="Add item"
          style={styles.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16,
  },
})

export default Header
