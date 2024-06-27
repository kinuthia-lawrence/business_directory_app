import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  //adding fonts
  useFonts({
    'outfit-black' :require('./../assets/fonts/lexend_black.ttf'),
    'outfit-bold' :require('./../assets/fonts/lexend_bold.ttf'),
    'outfit-extrabold' :require('./../assets/fonts/lexend_extrabold.ttf'),
    'outfit-medium' :require('./../assets/fonts/lexend_medium.ttf'),
    'outfit-regular' :require('./../assets/fonts/lexend_regular.ttf'),
    'outfit-semibold' :require('./../assets/fonts/lexend_semibold.ttf'),
    'outfit-light' :require('./../assets/fonts/lexend_light.ttf'),
    'outfit-thin' :require('./../assets/fonts/lexend_thin.ttf'),
    'outfit-extra-light' :require('./../assets/fonts/lexend_extralight.ttf'),

  })
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
