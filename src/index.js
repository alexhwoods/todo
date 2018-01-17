import React from 'react'
import uuidv4 from 'uuid/v4'
import { View, StyleSheet, Platform, FlatList } from 'react-native'

import Header from './components/Header'
import Row from './components/Row'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], value: '' }
  }

  handleAddItem = () => {
    const { value, items } = this.state

    if (!value) return

    this.setState({
      items: items.concat({ id: uuidv4(), value, complete: false }),
      value: '',
    })
  }

  render() {
    const { value, items } = this.state
    return (
      <View style={styles.container}>
        <Header
          handleAddItem={this.handleAddItem}
          handleValueChange={value => this.setState({ value })}
          value={value}
        />
        <View style={styles.content}>
          <FlatList
            data={items.map(item => ({ ...item, key: item.id }))}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => <Row {...item} />}
            style={styles.list}
          />
        </View>
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
  content: {
    flex: 1,
  },
  list: {
    backgroundColor: '#FFF',
  },
  separator: {
    height: 0.5,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#bdbdbd',
  },
})
