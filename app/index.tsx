import React, { useEffect, useState } from "react";
import { Button, Text, StatusBar, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const index = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const router = useRouter();

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  return (
    <LinearGradient colors={["#201F2B", "#11111A"]} className="flex-1">
      <StatusBar barStyle="default" backgroundColor="#296b09" />

      <Animated.View
        className="flex-1 mt-40 gap-4 px-4"
        style={{ opacity: fadeAnim }}
      >
        <Image source={require("../assets/images/main.png")}></Image>
        <Text className="text-white text-center">
          Bienvenido a nuestra aplicación basada en la API de Rick and Morty,
          una emocionante aventura que te permite explorar el fascinante
          universo de esta icónica serie animada. En esta aplicación, podrás
          acceder a una amplia gama de información sobre los personajes,
          episodios y mundos que conforman el multiverso de Rick and Morty.
        </Text>
        <Button
          color="#097908"
          title="Next"
          onPress={() => router.replace("/(tabs)/home")}
        ></Button>
      </Animated.View>
    </LinearGradient>
  );
};

export default index;
