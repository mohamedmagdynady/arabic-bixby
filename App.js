/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert,Platform, StyleSheet, Text, View,TextInput,Button,Linking} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props) {
    super(props);
    //this._tanslate=this._tanslate.bind(this);
    this._onPressButton=this._onPressButton.bind(this);
    this.state = { text: '',translation:'HI !!' };
  }
  _tanslate=()=>{
console.log('translated');
//this.setState({translation:'text'});
fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=ar-en&key=trnsl.1.1.20190218T112754Z.175e64a454c72ee7.a5ce96aea0d966e70e5599d65a38f849e6403b37&text=${this.state.text}`
)
.then((response) => response.json())
.then((responseJson) => {
  console.log( responseJson.text);
  this.setState({translation:responseJson.text})

})
.catch((error) => {
  console.error(error);
});
}
  
  _onPressButton() {
   // Alert.alert('You tapped the button!')
   if(this.state.translation ==="google") Linking.openURL("https://www.google.com.eg");
   else{
    alert('i donot understand this order')
   }
   /*Linking.canOpenURL("Calendar://app").then(supported => {
    if (supported) {
      Linking.openURL("Calendar://app");
    } else {
      alert('sorry invalid url')
    }
  });*/
  //  this.setState({translation:'text'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>enter a command !</Text>
        
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
  onPress={this._tanslate}
  title="go"
  color="#841584"
  
/>
<Button
            onPress={this._tanslate}
            title="translate"
            color="#841584"
          />
<Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
          <Text>{this.state.translation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
