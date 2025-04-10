// app/google-login.tsx
import { View, Button, Alert } from "react-native";
import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged } from "firebase/auth";
import { router } from "expo-router";

export default function GoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com", // 📌 Xem hướng dẫn bên dưới
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication!;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => router.push("./"))
        .catch((err) => Alert.alert("Lỗi đăng nhập", err.message));
    }
  }, [response]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Đăng nhập với Google" onPress={() => promptAsync()} disabled={!request} />
    </View>
  );
}
