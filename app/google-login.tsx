import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { router } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginScreen() {
  const [user, setUser] = useState<any>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '262210656625-8fhkiivg0na239984oae4l5o4jqvv6a8.apps.googleusercontent.com', // 👈 thay vào đây
    androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com', // nếu bạn build app
    iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com', // nếu bạn build app
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.authentication!;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(userCredential => {
          setUser(userCredential.user);
          router.replace('/home');
        })
        .catch(error => {
          console.log('Firebase login error:', error.message);
        });
    }
  }, [response]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) setUser(currentUser);
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text>Email: {user.email}</Text>
          <Text>Tên: {user.displayName}</Text>
          <Button title="Đăng xuất" onPress={handleLogout} color="#f44336" />
        </>
      ) : (
        <Button
          title="Đăng nhập với Google"
          onPress={() => promptAsync()}
          disabled={!request}
          color="#f57c00"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
