import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUpScreen ({navigation}) {

  const [data, setData] = useState({
    email: '',
    password: '', 
    confirmPass: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirmPassSecureTextEntry: true
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

  const confirmPasswordInputChange = (value) => {
    setData({
      ...data,
      confirmPass: value,
    })
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff077e" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text__header}>Markopolo.ai</Text>
        <Text style={styles.sub__header}>Register Here</Text>
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

        <Text style={[styles.text__footer,{ marginTop: 20}] }>Confirm Password</Text>
        <View style={styles.action}>
            <MaterialIcons
             name="lock-outline"  
             size={20} 
             color="#ff077e"
            />
           	<TextInput 
              secureTextEntry={data.confirmPassSecureTextEntry}
							style={styles.textInput}
							placeholder='Confirm Password' 
              autoCapitalize='none'
              onTextInput={(value) => confirmPasswordInputChange(value)}
						/>
            {data.confirmPassSecureTextEntry ? (
              <Feather
                onPress={() => setData({...data, confirmPassSecureTextEntry: !data.confirmPassSecureTextEntry})}
                name='eye-off'
                color='grey'
                size={20}
              />
            ): (
              <Feather
                onPress={() => setData({...data, confirmPassSecureTextEntry: !data.confirmPassSecureTextEntry})}
                name='eye'
                color='grey'
                size={20}
              />
            )}

        </View>


        <View style={styles.buttonContainer}>
          {/* this navigation should change */}
          <Pressable style={styles.button} onPress={() => navigation.navigate('LoginScreen')}> 
            <Text Text style={styles.buttonText}>Sign In</Text>
          </Pressable>

          <Pressable style={[styles.button, {
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#ff077e',
              marginTop: 16
            }]}
             onPress={() => navigation.navigate('LoginScreen')}
            >
             <Text style={[styles.buttonText, {
                color: '#ff077e'
              }]}>
                Login
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
  buttonContainer: {
    width:' 100%',
    alignItems: 'center',
    marginTop:  25
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