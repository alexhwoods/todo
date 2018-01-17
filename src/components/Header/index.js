import React from 'react'
import { Keyboard, View, TextInput, StyleSheet } from 'react-native'

class Header extends React.Component {
  handleSubmitEditing = () => {
    this.props.handleAddItem()
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.header}>
        <TextInput
          blurOnSubmit={false}
          onChangeText={this.props.handleValueChange}
          onSubmitEditing={this.handleSubmitEditing}
          placeholder="Add item"
          returnKeyType="done"
          style={styles.input}
          value={this.props.value}
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
