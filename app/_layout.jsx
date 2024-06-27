import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { View, Text } from 'react-native'
import LoginScreen from './../components/LoginScreen'

export default function RootLayout() {
  //adding fonts
  useFonts({
    "outfit-black": require("./../assets/fonts/lexend_black.ttf"),
    "outfit-bold": require("./../assets/fonts/lexend_bold.ttf"),
    "outfit-extrabold": require("./../assets/fonts/lexend_extrabold.ttf"),
    "outfit-medium": require("./../assets/fonts/lexend_medium.ttf"),
    "outfit-regular": require("./../assets/fonts/lexend_regular.ttf"),
    "outfit-semibold": require("./../assets/fonts/lexend_semibold.ttf"),
    "outfit-light": require("./../assets/fonts/lexend_light.ttf"),
    "outfit-thin": require("./../assets/fonts/lexend_thin.ttf"),
    "outfit-extra-light": require("./../assets/fonts/lexend_extralight.ttf"),
  });
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY} >
   
      <SignedIn>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
      <LoginScreen/>
      </SignedOut>
    </ClerkProvider>
  );
}
