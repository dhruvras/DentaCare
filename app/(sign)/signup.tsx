import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Signup() {
  const router = useRouter();

  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState(null);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

  const handleSignup = () => {
    if (fullname && age && gender && location) {
      alert(`Name: ${fullname}\nAge: ${age}\nGender: ${gender}\nLocation: ${location}`);
      router.replace('/(home)/home');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.mainframe}>
      <Text style={styles.heading}>Sign Up</Text>

      <View style={styles.container}>
        {/* Full Name */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#e0f7f6"
          value={fullname}
          onChangeText={setFullname}
        />

        {/* Location */}
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#e0f7f6"
          value={location}
          onChangeText={setLocation}
        />

        {/* Gender + Age in one row */}
        <View style={styles.row}>
          <View style={styles.dropdownWrapper}>
            <DropDownPicker
              open={open}
              value={gender}
              items={items}
              setOpen={setOpen}
              setValue={setGender}
              setItems={setItems}
              placeholder="Gender"
              placeholderStyle={{ color: '#e0f7f6' }}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
            />
          </View>

          <TextInput
            style={styles.ageInput}
            placeholder="Age"
            placeholderTextColor="#e0f7f6"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>

        {/* Signup Button */}
        <View style={{ marginTop: 30 }}>
          <CustomButton text="SignUp" task={handleSignup} state={false} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainframe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fceccff',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#02505e',
    marginBottom: 20,
  },
  container: {
    width: '85%',
    borderRadius: 20,
    backgroundColor: '#54b5b4',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#3d9d9c',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dropdownWrapper: {
    width: '48%',
    zIndex: 10, // important for dropdown layering
  },
  dropdown: {
    backgroundColor: '#3d9d9c',
    borderRadius: 12,
    borderColor: 'transparent',
    height: 55,
  },
  dropdownContainer: {
    backgroundColor: '#3d9d9c',
    borderColor: 'transparent',
  },
  ageInput: {
    width: '48%',
    height: 55,
    backgroundColor: '#3d9d9c',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
  },
});
