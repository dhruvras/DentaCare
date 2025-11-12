import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState(true);
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      alert(`Username: ${username}\nPassword: ${password}`);
    } else {
      alert('Please enter both username and password');
    }
  };
    useEffect(() => {
        if(username.trim() !== '' && password.trim() !== ''){
            setState(false);
        }else{
            setState(true);
        }
    }, [username, password]);
  
  return (
    <View style={styles.mainframe}>
      <Text style={styles.heading}>Login Page</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input1}
          placeholder="Username"
          placeholderTextColor="#e0f7f6"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input2}
          placeholder="Password"
          placeholderTextColor="#e0f7f6"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Button at the bottom */}
        <View style={styles.buttonContainer}>
          <CustomButton text="Login" task={handleLogin}  state ={state}/>
        </View>
        <Text style={{marginTop:10, fontSize:15}}>Don't have an account</Text>
        <TouchableOpacity onPress={()=>{()=>{router.navigate('/(sign)/signup')}}}>
            <Text style={{fontSize:18, color:'white', textDecorationLine:'underline'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainframe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9be1df',
  },
  container: {
    width: '85%',
    height: '48%',
    borderRadius: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54b5b4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 20,
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#02505e',
  },
  input1: {
    width: '100%',
    height: 60,
    backgroundColor: '#3d9d9c',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  input2: {
    width: '100%',
    height: 60,
    backgroundColor: '#3d9d9c',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  
});
