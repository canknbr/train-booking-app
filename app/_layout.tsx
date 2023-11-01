import { Stack } from "expo-router";
export const unstable_settings = {
  initialRouteName: "",
};

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
