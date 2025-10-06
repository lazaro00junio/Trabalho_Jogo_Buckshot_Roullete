import { View, Image,Text, StyleSheet } from 'react-native';
import Botao from './Botao';
import GameData from './GameData';

console.log("ganhaste");

const Ganhou = ({ nav }) => (
  
  <View style={styles.msg}>
    <Image source={require('./asset/cat-laughing.png')} /> 
    <Botao label="Reiniciar" onPress={() => {nav('inicio');GameData.setPontuacao(0)}}/>
  </View>
);

const styles = StyleSheet.create({
  msg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
});

export default Ganhou;
