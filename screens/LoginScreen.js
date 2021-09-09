import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen ({navigation}) {

  const [data, setData] = useState({
    email: '',
    password: '', 
    check_textInputChange: false,
    secureTextEntry: true,
  })

  const textInputChange = value => {
    if(value.length !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true
      })
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false
      })
    }
  }

  const passwordInputChange= (value) => {
    if(value.length !== 0) {
      setData({
        ...data,
        password: value,
      })
    } 
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff077e" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text__header}>Markopolo.ai</Text>
        <Text style={styles.sub__header}>Welcome Back</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text__footer}>Email</Text>
        <View style={styles.action}>
            <FontAwesome
              name="user-o"
              size={20}
              color="#ff077e" />
           	<TextInput 
							style={styles.textInput}
							placeholder='Enter Email' 
              autoCapitalize='none'
              onChangeText={value => textInputChange(value)}
							/>
            
            {data.check_textInputChange ? (
               <Feather
                name='check-circle'
                color='green'
                size={20}
              />
            ): null}
           
        </View>

        <Text style={[styles.text__footer,{ marginTop: 20}] }>Password</Text>
        <View style={styles.action}>
            <MaterialIcons
             name="lock-outline"  
             size={20} 
             color="#ff077e"
            />
           	<TextInput 
              secureTextEntry={data.secureTextEntry}
							style={styles.textInput}
							placeholder='Enter Password' 
              autoCapitalize='none'
              onTextInput={(value) => passwordInputChange(value)}
						/>
            {data.secureTextEntry ? (
              <Feather
                onPress={() => setData({...data, secureTextEntry: !data.secureTextEntry})}
                name='eye-off'
                color='grey'
                size={20}
              />
            ): (
              <Feather
                onPress={() => setData({...data, secureTextEntry: !data.secureTextEntry})}
                name='eye'
                color='grey'
                size={20}
              />
            )}
        </View>
        <View style={styles.forgotCont}>
              <TouchableOpacity>
                <Text style={styles.forgot__text}>Forgot Password?</Text>
              </TouchableOpacity>
        </View>


        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('SignUpScreen')}>
            <Text Text style={styles.buttonText}>LogIn</Text>
          </Pressable>

          <Pressable style={[styles.button, {
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#ff077e',
              marginTop: 16
            }]}
             onPress={() => navigation.navigate('SignUpScreen')}
            >
             <Text style={[styles.buttonText, {
                color: '#ff077e'
              }]}>
                Sign In
              </Text>
          </Pressable>
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff077e'
  }, 
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text__header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  sub__header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text__footer: {
    color: '#05375a',
    fontSize: 18,
  },
  
  action: {
    flexDirection:'row',
    alignItems: 'center',
    paddingBottom: 5,
    marginTop: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1, 
    // marginTop: Platform.OS === 'ios' ? 0 : -12 ,
    paddingLeft: 20, 
    color: '#05375a',
  },
  forgotCont: {
    marginTop: 20
  },  
  forgot__text: {
    textAlign: 'right',
    color: '#888',
  },
  buttonContainer: {
    width:' 100%',
    alignItems: 'center',
    marginTop:  30
  },
  button: {
    backgroundColor: '#ff077e',
    width:'100%',
    height: 45, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 15,
    textAlign: 'center'
  }
})