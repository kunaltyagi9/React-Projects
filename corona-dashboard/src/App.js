import  { Component } from 'react'
import  { Box, withStyles } from '@material-ui/core';
import logo from './images/COVID19.jpg';
import Cards from './components/Cards';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    background: '#F5F5F5',
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#777'
  }
}

class App extends Component{
  render(){
    return (
      <Box className={this.props.classes.container}> 
        <Box className={this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC</Box>
        <img style={{width:350}} src={logo} alt="covid"/>
        <Cards />
      </Box>
    )
  }
}

export default withStyles(style)(App);