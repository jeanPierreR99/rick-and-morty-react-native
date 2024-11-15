import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle:{
          fontSize:15,
        },
        tabBarActiveTintColor:"white",
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {
            backgroundColor:"#11111A",
            borderColor:"#11111A",
            height:60
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home-sharp" : "home-outline"}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "person-circle-sharp" : "person-circle-outline"}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
