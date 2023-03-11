import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

import Home from "screens/Home";
import HomeHeader from "components/HomeHeader";
import Location from "screens/Location";
import LocationHeader from "components/Location/LocationHeader";
import Search from "screens/Search";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Location">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <HomeHeader />,
          }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            header: () => <LocationHeader />,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            header: () => <LocationHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
