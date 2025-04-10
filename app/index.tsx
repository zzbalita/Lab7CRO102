// app/index.tsx
import { View, Button } from "react-native";
import { router } from "expo-router";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 20, padding: 20 }}>
      <Button title="Đăng nhập bằng Email" onPress={() => router.push("./email-login")} />
      <Button title="Đăng nhập bằng Google" onPress={() => router.push("./google-login")} />
    </View>
  );
}
