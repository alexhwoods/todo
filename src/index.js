import React from 'react'
import uuidv4 from 'uuid/v4'
import { View, StyleSheet, Platform, FlatList } from 'react-native'

import Header from './components/Header'
import Row from './components/Row'
import Footer from './components/Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], value: '', filter: 'ALL' }
  }

  handleAddItem = () => {
    const { value, items } = this.state

    if (!value) return

    this.setState({
      items: items.concat({
        id: uuidv4(),
        value,
        complete: false,
        editing: false,
      }),
      value: '',
    })
  }

  getFilteredItems = () => {
    const { filter, items } = this.state

    if (filter === 'ALL') return items
    else if (filter === 'COMPLETED')
      return items.filter(({ complete }) => complete === true)
    else return items.filter(({ complete }) => complete === false)
  }

  handleItemChange = id => value => {
    const { items } = this.state
    this.setState({
      items: items.map(item => (item.id === id ? { ...item, value } : item)),
    })
  }

  handleRemoveItem = id => {
    const { items } = this.state
    this.setState({ items: items.filter(item => item.id !== id) })
  }

  handleToggleComplete = (id, complete) => {
    const { items } = this.state
    this.setState({
      items: items.map(item => (item.id === id ? { ...item, complete } : item)),
    })
  }

  handleToggleEditing = id => () => {
    const { items } = this.state
    this.setState({
      items: items.map(
        item =>
          item.id === id
            ? { ...item, editing: true }
            : { ...item, editing: false },
      ),
    })
  }

  render() {
    const { value, items, filter } = this.state
    const filteredItems = this.getFilteredItems()

    return (
      <View style={styles.container}>
        <Header
          handleAddItem={this.handleAddItem}
          handleValueChange={value => this.setState({ value })}
          value={value}
        />
        <View style={styles.content}>
          <FlatList
            data={filteredItems.map(item => ({ ...item, key: item.id }))}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Row
                {...item}
                handleItemChange={this.handleItemChange(item.id)}
                handleRemoveItem={() => this.handleRemoveItem(item.id)}
                handleToggleComplete={this.handleToggleComplete}
                handleToggleEditing={this.handleToggleEditing(item.id)}
              />
            )}
            style={styles.list}
          />
        </View>
        <Footer
          count={items.filter(({ complete }) => complete === false).length}
          filter={filter}
          handleFilterChange={filter => this.setState({ filter })}
        />
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
