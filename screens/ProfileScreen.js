import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput } from 'react-native';
import { auth } from '../firebase';
import { signOut, updatePassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChangePassword = () => {
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        console.log('Password updated successfully');
        setNewPassword('');
      })
      .catch(error => {
        console.log('Error updating password: ', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Pressable onPress={handleSignOut}>
          <Text style={styles.signOut}>Sign Out</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.email}>Welcome {user.email}</Text>
        <Text style={styles.phone}>Phone number: {user.phoneNumber}</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
          <Pressable style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Change Password</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signOut: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
