import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native'

const DisplayText = ({ complete, value }) => (
  <TouchableOpacity onPress={handleToggleEditing} style={styles.textWrap}>
    <Text style={[styles.text, complete && styles.complete]}>{value}</Text>
  </TouchableOpacity>
)

const EditableText = ({ value, handleItemChange }) => (
  <View style={styles.textWrap}>
    <TextInput
      onChangeText={handleItemChange}
      style={styles.text}
      value={value}
    />
  </View>
)

export default class Row extends Component {
  render() {
    const {
      complete,
      handleToggleComplete,
      id,
      value,
      editing,
      handleRemoveItem,
    } = this.props

    return (
      <View style={styles.container}>
        <Switch
          value={complete}
          onValueChange={complete => handleToggleComplete(id, complete)}
        />
        {editing ? (
          <DisplayText complete={complete} value={value} />
        ) : (
          <EditableText
            handleItemChange={this.props.handleItemChange}
            value={value}
          />
        )}
        <TouchableOpacity onPress={handleRemoveItem}>
          <Text style={styles.destroy}>X</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10,
  },
  complete: {
    textDecorationLine: 'line-through',
  },
  text: {
    fontSize: 24,
    color: '#4D4D4D',
  },
  destroy: {
    fontSize: 20,
    color: '#CC9A9A',
  },
})
