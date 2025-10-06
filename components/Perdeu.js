import { View, Image, StyleSheet,Text } from 'react-native';
import Botao from './Botao';

const Perdeu = ({ nav }) => (
  <View style={styles.msg}>
    <Image source={require('./asset/cat-laughing.png')} /> 
    <Botao label="Reiniciar" onPress={() => {nav('inicio');GameData.setPontuacao(0)}}/>
     <Text style={styles.msgs}>"TESTE"</Text>
  </View>
);

const styles = StyleSheet.create({
  msg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 40,
    backgroundColor: 'black',
  },
});

export default Perdeu;
