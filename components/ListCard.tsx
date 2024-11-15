import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "../global.css";
import useFetchCharacter from "@/hooks/fetchCharacter";

const renderItem = ({ item }) => (
  <View
    style={{
      width: 280,
      marginRight: 20,
      borderRadius: 10,
      overflow: "hidden",
      height: 260,
    }}
  >
    <Image
      source={{ uri: item.image }}
      resizeMode="stretch"
      style={{ width: "100%", height: "100%" }}
    />
    <LinearGradient
      colors={["#00000046", "#121219"]}
      className="flex-1 absolute bottom-0 w-full h-full"
    />

    <Text
      className="text-white rounded-lg"
      style={{
        backgroundColor: "#296b09",
        padding: 2,
        paddingHorizontal: 6,
        position: "absolute",
        left: 6,
        top: 6,
      }}
    >
      {item.name}
    </Text>
    <View
      className="rounded-lg"
      style={{
        position: "absolute",
        left: 6,
        bottom: 6,
      }}
    >
      <Text className="text-gray-400">{item.origin.name}</Text>
      <Text className="text-gray-400">{item.status}</Text>
      <Text className="text-gray-400">{item.species}</Text>
      <Text className="text-gray-400">{item.gender}</Text>
    </View>
  </View>
);

const ListCard = ({ url }) => {
  const { data, loading, error } = useFetchCharacter(url);

  if (loading) return;
  if (error) return <Text className="text-white">Error: {error.message}</Text>;

  return (
    <View className="mt-8">
      <Text className="text-gray-400 text-sm flex-1">{data.name}</Text>

      <FlatList
        className="mt-8"
        horizontal
        data={data.characters || []}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View>
            <Text className="text-white">Cargando</Text>
          </View>
        }
        initialNumToRender={3}
      />
    </View>
  );
};

export default ListCard;
