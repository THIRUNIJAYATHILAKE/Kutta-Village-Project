import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity,Image } from 'react-native';

export default function Signup(){

    const [form,setForm] = useState({
        fullName:'',
        dob:'',
    email:'',
    address:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
  });


  function handleSignup(){

  }

    return(

        <SafeAreaView>

            <View style={styles.header}>
            <Text style={styles.welcomeText}>Hello!</Text>
            <Text style={[styles.welcomeText, { marginTop: 10 }]}>Register to get stared</Text>
            </View>

            <View style={styles.input}>
                < TextInput
                style={styles.emailInput}
                placeholder='Full Name*'
                value={form.fullName}
                />

                < TextInput
                style={styles.emailInput}
                placeholder='Date of Birth*'
                value={form.dob}
                />

                < TextInput
                style={styles.emailInput}
                placeholder='Email*'
                value={form.email}
                />

                < TextInput
                style={styles.emailInput}
                placeholder='Address*'
                value={form.address}
                />

                < TextInput
                style={styles.emailInput}
                placeholder='Phone Number*'
                value={form.phoneNumber}
                />

                < TextInput
                style={styles.passwordInput}
                placeholder='Password*'
                value={form.password}
                secureTextEntry={true}
                onChangeText={password=> setForm ({...form,password})}/>

                < TextInput
                style={styles.passwordInput}
                placeholder='Confirm Password*'
                value={form.confirmPassword}
                secureTextEntry={true}
                onChangeText={password=> setForm ({...form,password})}/>

            </View>

            <View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>


      <View>
        <Text style={styles.haveacc}>
            Already have an account? 
            <Text>Login here</Text> 
        </Text>
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


        </SafeAreaView>


    );

}



const styles = StyleSheet.create({

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

  haveacc:{
fontSize: 18,
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

})