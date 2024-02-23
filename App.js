import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Image, ImageBackground} from 'react-native';
import { Button } from 'react-native-web';


export default function App() {

    clicaae = () => {
        alert('brito é lindo! VOCÊ ESTÁ LOGADO!')
    }
    const Imagem = {uri :'https://anprotec.org.br/site/wp-content/uploads/2018/09/logo-senai-cor-1.jpg'}
    const fundo = {uri: 'https://www.paraisodoverde.com.br/wp-content/uploads/2019/10/nova-odessa-sp.jpg'}
return (
    
    // começa view
<View style={styles.container}>
{/* os 3 textos */}
<ImageBackground
source={fundo}
style= {styles.fundo}
resizeMode='cover'
>
<Image 
style = {styles.img}
source = {Imagem}
/>

<Text style={{fontSize: 36, color: 'white'}}>LOGIN</Text>
{/*  */}
<TextInput style={{height: 100, width: 400, border: 'solid', borderWidth: 1, borderColor: 'black', fontSize: 24, backgroundColor: 'white',}}
placeholder='Digite seu email..'
color= 'black'
inputMode='email'

/>
<TextInput style={{height: 100, width: 400, border: 'solid', borderWidth: 1, borderColor: 'black', fontSize: 24, backgroundColor: 'white',}}
placeholder='Digite sua senha..'
inputMode='none'
color='black'
secureTextEntry={true}

/>
<Button style={styles.btn}
  onPress={clicaae}
  title="ENTRA"
  color="black"
 
/>

</ImageBackground>
</View>
)};


const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
flex: 1,
justifyContent: 'center',
alignItems: 'center',
margin: 0,
display: 'flex',
},
btn: {

    backgroundColor: 'black',
    border: 'solid', 
    borderWidth: 1, 
    borderColor: 'black', 
    fontSize: 48,
    padding: '400px',
},
img: {
   height: 80,
   width: 300,
},
fundo: {
    color: 'white',
    alignItems: 'center',
    flex: 1,
    
}
});