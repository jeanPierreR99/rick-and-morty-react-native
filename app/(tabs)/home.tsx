import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCard from "@/components/ListCard";
import useFetchEpisode from "@/hooks/fetchEpisode";

export default function home() {
  const { data, loading, error, refetch } = useFetchEpisode(
    "https://rickandmortyapi.com/api/episode"
  );

  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  const filteredData = data?.results.filter((episode) =>
    episode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <LinearGradient colors={["#201F2B", "#11111A"]} className="flex-1">
      <StatusBar barStyle="default" backgroundColor="#296b09" />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className=""
      >
        <View className="pt-20 px-10">
          <View className="flex-row">
            <View className="flex-1">
              <View className="flex-row gap-2">
                <Text className="text-gray-200 font-bold text-2xl">Hello</Text>
                <Text className="text-gray-400 text-2xl">Jean Pierre!</Text>
              </View>
              <Text className="text-gray-400">Descubre nuevas aventuras</Text>
            </View>
            <Image
              source={require("../../assets/images/main.png")}
              className="w-20 h-20"
            />
          </View>

          <View className="mt-8 relative">
            <Ionicons
              name="search"
              color="gray"
              size={22}
              className="absolute z-20 left-4 top-[50%] translate-y-[-50%]"
            />
            <TextInput
              className="bg-[#22222E] rounded-lg text-white px-4 pl-12 py-4"
              placeholder="Buscar"
              placeholderTextColor="gray"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
          </View>

          <View className="mt-8">
            <Text className="text-gray-200 font-bold text-2xl">Episodios</Text>
          </View>

          {loading && <ActivityIndicator size="large" color="#0000ff" />}

          {error && (
            <Text className="text-xs text-red-500">Ocurrió un error</Text>
          )}

          {filteredData?.map((item, index) => (
            <ListCard key={index} url={item.url} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
