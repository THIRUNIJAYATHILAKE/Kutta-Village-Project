import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function Login() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#F8F6F6'}}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={[styles.welcomeText, { marginTop: 10 }]}>Glad to see you, Again!</Text>
      </View>

      <View style={styles.input}>
        < TextInput
          style={styles.emailInput}
          placeholder='userName'
          value='form.email'
          onChangeText={email=> setForm ({...FormData,email})}/>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText:{
    fontSize:25,
    fontWeight:'700',
    alignSelf: 'center',
  },
  header:{

  },
  input:{

  },
  emailInput:{
       borderColor: 'gray', // Border color
    borderWidth: 1,      // Border width
    borderRadius: 5, 
    height: 40,
    width: '100%',
    padding:20,
    marginTop:20
  }
});