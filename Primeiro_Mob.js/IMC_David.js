import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Constants from 'expo-constants';
import State from 'react'
//import { Button } from 'react-native-paper';

export default class App extends React.Component {
// Área Global
  state = {
  peso: 74,
  altura: 1.70,
  imc: 0,
  legenda: 'Indeterminado',
  cor: '#95a5a6',
  };

    CalcularIMC = () => { 
// Não preciso mais declarar abaixo pois estou utilizando o "state"
// Que me permite declarar fora da função.
     //const peso = 94;
     //const altura = 1.83;

     const resultado = this.state.peso / (this.state.altura * this.state.altura);
     
     this.setState({
       
      imc: Math.ceil(resultado)
            
      });

         if(resultado < 18.5) {

           this.setState ({
             legenda: 'Magreza',
             cor: '#9b59b6'
           });
                     
        } else if (resultado >= 18.5 && resultado < 25) {
   
            this.setState ({
             legenda: 'Normal',
             cor: '#2ecc71'
           });

          } else if (resultado >=25 && resultado < 30) {
              
              this.setState ({
             legenda: 'Sobre Peso',
             cor: '#f1c40f'
           });

          } else if (resultado >=30 && resultado < 40) {

            this.setState ({
             legenda: 'Obesidade',
             cor: '#e74c3c'
           });

          } else if (resultado >= 40) {
            this.state ({
              legenda: 'Obesidade Grave',
              cor: '#d35400'
            });

          }
         
     //alert(imc)
  }

render() {
//const legenda = 'Normal'
     return (

<View style={styles.app}> 
  <Text style={styles.legenda}>Seu IMC</Text>


     <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
       <Text style={styles.resultado}>{this.state.imc}</Text>
       <Text style={styles.diagnostico}>{this.state.legenda}</Text>      
     </View>

       <View>
        <TextInput style={styles.peso}
          label= "Peso"
          onChangeText={valor => {
          this.setState({peso: valor.replace(',', '.')});
        }} 
        />

        <TextInput style={styles.altura}
           label = "Altura"
           onChangeText={valor => {
           this.setState({altura: valor.replace(',', '.')})
        }} />

        <Button mode="contained"  onPress={this.CalcularIMC}> Calcular </Button>
              
       </View>
  </View>

    );

  }

}

const styles = StyleSheet.create ({
 
 app: {

   padding: 40,

 },

 painel: {

   backgroundColor: '#bdc3c7',
   alignSelf: 'center',
   borderRadius: 5,
   width: 150,
   marginVertical: 10,
   padding: 8,


 },

 legenda:  {

textAlign: 'center',
fontWeight: 'bold',

 },

 resultado: {
textAlign: 'center',
fontSize: 22,
fontWeight: 'bold',

 },
 diagnostico: {
textAlign: 'center',
fontSize: 16,
 },

peso: {
  marginVertical: 10,
//borderWidth: 1,
//borderColor: '#000',
},

altura: {
  marginVertical: 10,
//borderWidth: 1,
//borderColor: '#000',
}

});