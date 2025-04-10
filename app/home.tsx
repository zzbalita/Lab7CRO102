// app/home.tsx
import { View, Text, Button } from 'react-native';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';

export default function HomeScreen() {
  const user = auth.currentUser;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Xin chào: {user?.email}</Text>
      <View style={{ height: 20 }} />
      <Button
        title="Đăng xuất"
        onPress={async () => {
          await signOut(auth);
          router.replace('/');
        }}
        color="#f57c00"
      />
    </View>
  );
}
