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

})