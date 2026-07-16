// Icons: https://icons.expo.fyi/Index
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="orderForm" />
        <Stack.Screen name="contactForm" />
      </Stack>
    </Provider>
  );
}
