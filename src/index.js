import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'

import Header from './components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: { paddingTop: 30 },
    }),
  },
})
