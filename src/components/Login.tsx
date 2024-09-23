import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity,Image } from 'react-native';

export default function Login() {

  const [form,setForm] = useState({
    email:'',
    password:'',
  });

   const handleLogin = () => {
    console.log('Login button pressed');
    console.log('Email:', form.email);
    console.log('Password:', form.password);
    // Add your login logic here (API calls, validation, etc.)

    function handleEmail (email){
      console.log(email.nativeEvent.text);
    }
  };


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
          value={form.email}
          onChangeText={email=> handleEmail(email)}/>

          < TextInput
          style={styles.passwordInput}
          placeholder='password'
          value={form.password}
          secureTextEntry={true}
          onChangeText={password=> setForm ({...form,password})}/>
      </View>

      <View style={styles.forgetPassword}>
        <Text>Forget Password?</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>


      {/* "Or login with" Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or login with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.iconContainer}>
          <Image
          style={styles.logo}
          source={require('../../assets/facebook logo_icon.png')}  // Path to the local image
          resizeMode="contain"
        />

         <Image
          style={styles.logo}
          source={require('../../assets/google_g_icon.png')}  // Path to the local image
          resizeMode="contain"
        />

        </View>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F6',
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
    emailInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: 240,
    paddingHorizontal: 10,   // Use paddingHorizontal instead of padding to avoid text overflow
    marginTop: 50,
  },
  passwordInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: 240,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  forgetPassword:{
    marginRight: -120,
    marginTop: 15,
    fontWeight: '300',
  },
  loginButton: {
    backgroundColor: '#987D9A',  // Button color (purple)
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 40,
    width:240,
    borderRadius: 25,
  },
  loginButtonText: {
    color: '#FFF',   // Button text color
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',    // To align the text and lines horizontally
    alignItems: 'center',
    marginVertical: 30,      // Spacing between the button and divider
    width: '90%',            // Set the width of the container
    alignSelf: 'center',
  },
  line: {
    flex: 1,                 // Stretch the line
    height: 1,
    backgroundColor: 'black', // Line color
  },
  dividerText: {
    marginHorizontal: 10,    // Space between the lines and the text
    fontSize: 14,
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',  // Aligns items vertically (default behavior)
    alignItems: 'center',     // Centers the icons horizontally
    marginTop: 10,            // Adds some space above the icons
  },
  logo: {
    width: 35,   // Set width for each icon
    height: 35,  // Set height for each icon
     marginLeft: 10// Adds vertical space between the icons
  },
});