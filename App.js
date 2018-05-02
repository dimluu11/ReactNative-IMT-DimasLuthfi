import React, { Component } from 'react';
import { View,StyleSheet
  ,Text,Button,TextInput, TouchableOpacity } from 'react-native';



class App extends Component{ 
  klik = () => {}
  constructor(){
    super();
    this.state={ms:0,hg:0,imt:0,diag:'',stat:false}
  }

  klik=()=>{
    var berat = parseInt(this.state.ms);
    var hgt = parseInt(this.state.hg)/100;
    var imtv = berat/Math.pow(hgt,2);
    var diagv ='';
    if(imtv<18.5){
      diagv='Berat Badan anda kurang (Your Body Weight is Less)';
    }else if(imtv>=18.5 && imtv<=24.9){
      diagv='Berat Badan Ideal (Your Body Weight is Ideal)';
    }else if(imtv>=25.0 && imtv<=29.9){
      diagv ='Berat Badan Berlebih (Your Body Weight is Excess)';
    }else if(imtv>=30.0 && imtv<=39.9){
      diagv='Berat Badan Sangat Berlebih (You are Very Weight!)'
    }else{
      diagv='Berat Badan Obesitas (WARNING, You are Obesity!)'; 
    }
    this.setState({
      ms:berat,
      hg:hgt,
      imt:imtv,
      diag:diagv,
      stat:true
    })
  }
  render() {
    return (
      <View style={styles.container}>
      
        <TextInput onChangeText={(angka1)=>this.setState({ms:angka1})} style={{height:40,width:250,backgroundColor:'white'}} placeholder='Berat Badan/Body Weight (kg)' value={this.state.ms}  />
        <Text>{'\n'}</Text>
        <TextInput onChangeText={(angka2)=>this.setState({hg:angka2})} style={{height:40,width:250,backgroundColor:'white'}} placeholder='Tinggi/Body Height (cm)' value={this.state.hg}  />
        <Text>{'\n'}</Text>
        <TouchableOpacity>
        <Button onPress={()=>{this.klik();}} title="Click Here!!" color="green" style={{width:50,height:100}}/>
        </TouchableOpacity>
        {this.state.stat &&
        <View style={styles.welcome} hidden="true">
          <Text style={styles.text}>Berat Badan Kamu (Your Body Weight):{'\n'}{this.state.ms} kg</Text>
          <Text style={styles.text}>Tinggi Badan Kamu (Your Body Height):{'\n'}{this.state.hg} m</Text>
          <Text style={styles.text}>Index Massa Tubuh (Body Mass Index):{'\n'}{this.state.imt}</Text>
          <Text style={styles.text}>Diagnosa (Diagnosis):{'\n'}{this.state.diag}</Text>
        </View>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent: 'center',
    paddingHorizontal:30
  },
  welcome: {
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'violet',
  },
  image:{
    width:290,
    height:350
  },
  text:{
    fontSize: 20,
    textAlign:'center'
  },
});

export default App;