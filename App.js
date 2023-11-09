import * as React from 'react';
import { Pressable, View, Text, Image ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'lightblue'}}>
      <Text  style={{
          backgroundColor:'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
          fontSize:30}}>Hugo Jorge Carnaúba Leitão</Text>
      <Image source={require('./assets/Hugo.jpg')} 
        style={styles.image}
      />
      <Pressable
        onPress={() => navigation.navigate('Habilidades')}
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Habilidades</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Formacao')}
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Formação</Text>
      </Pressable>
      
      <Pressable
        onPress={() => navigation.navigate('AboutMe')}
        style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Sobre Mim</Text>
      </Pressable>
    </View>
  );
}

function Habilidades() {
  return (
    <View style={styles.container}>
      <Text style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>Habilidades{'\n'}
      Linguagens Java, C, C#/.NET, AngularJS, htmle React Native{'\n'}
      Conhecimento em Oracle/SQL Server/MySQL{'\n'}
      Familiarizado com o método SCRUM{'\n'}
      DevOps / Git{'\n'}
      Idiomas:{'\n'}
      Inglês (Avançado) e Português (Nativo)</Text>
    </View>
  );
}

function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>Formação{'\n'}Faculdade Senac PE{'\n'}ANÁLISE E DESENVOLVIMENTO DE SISTEMAS{'\n'}2022 - PREVISÃO 2024{'\n'}• Ainda Cursando{'\n'}• Bolsa de Pesquisa em parceria com a FACEPE{'\n'}(Fundação de Amparo a Ciência e Tecnologia{'\n'}do Estado de Pernambuco.)
      </Text>
    </View>
  );
}
function AboutMe() {
  return (
    <View style={styles.container}>
      <Text style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>Sobre Mim{'\n'}
      Sou um estudante de Análise e Desenvolvimento de Sistemas{'\n'}na Faculdade Senac Pernambuco.{'\n'}
      Vejo áreas que não conheço não como um problema,{'\n'} mas como uma oportunidade de aprender ainda mais.
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Habilidades" component={Habilidades} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="AboutMe" component={AboutMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightblue'
    
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  
});
export default App;
