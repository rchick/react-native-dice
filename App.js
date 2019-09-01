import React from 'react';
import { Container, AppRegistry, View, Text, Button, StyleSheet } from "react-native" 
import { SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix } from "./src/components/dice/side.js"
import { registerRootComponent } from "expo"

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      side: 0,
      colorHolder: '#777'
    }
    this._rollDice = this._rollDice.bind(this)
  }

  _rollDice () {
    const side = Math.floor(Math.random() * 6)
    this.setState({ side })

    var ColorCode = 'rgb(' 
      + (Math.floor(Math.random() * 256)) + ',' 
      + (Math.floor(Math.random() * 256)) + ',' 
      + (Math.floor(Math.random() * 256)) + ')';

    this.setState({colorHolder : ColorCode})
  }

  render () {
    const Side = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side];
    return (
      <View style={[styles.container, { backgroundColor: this.state.colorHolder }]}>
        <Text style={styles.title}>Eddy's Dice app</Text>
        <Button title="roll" onPress={this._rollDice}>roll</Button>
        <Side />
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default registerRootComponent(App);