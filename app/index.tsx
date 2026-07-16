import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <Pressable
        style={homeScreenStyles.button}
        onPress={() => router.navigate("/orderForm")}
      >
        <Text style={homeScreenStyles.text}>Aloita tilaus napauttamalla</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "sans-serif",
    userSelect: "none",
  },
});
