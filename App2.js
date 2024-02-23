import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
    // começa view
<View style={styles.container}>
{/* os 3 textos */}
<Text style={{fontWeight: 'bold',color: 'blue', fontSize: 30, textAlign: 'right', margin: 0,}}>Guilherme Santiago de Brito</Text>

<Text style={{fontStyle:'italic',color: 'black', fontSize: 25, textAlign: 'left', border: 'solid', borderWidth: 1, borderColor: 'black', margin: 0,}}>N:17</Text>

<Text style={{backgroundColor:'pink' ,color:'black', fontSize: 20, textAlign: 'center', margin: 0,}}>Sala:7</Text>

<Text style={{color: 'black', textAlign: 'center', fontSize: 30, backgroundColor: 'red', border: 'solid', borderWidth: 1, borderColor: 'gold'}}>SENAI SP</Text>


</View>
)};


const styles = StyleSheet.create({
container: {

flex: 1,
justifyContent: 'center',
margin: 0,
display: 'flex',
},
});