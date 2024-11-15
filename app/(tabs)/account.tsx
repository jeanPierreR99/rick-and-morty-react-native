import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";
export default function account() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#201F2B", "#11111A"]}
      className="flex-1 flex items-center justify-center pt-20 px-10"
    >
      <Text className="text-white text-2xl text-center">HI</Text>
      <Button title="Inicio" onPress={() => router.replace("/")} />
    </LinearGradient>
  );
}
