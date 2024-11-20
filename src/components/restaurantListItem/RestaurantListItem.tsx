import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { ResutarantsProps } from "../trendingRestaurants/Restaurants";
import { Ionicons } from "@expo/vector-icons";

const RestaurantListItem = ({ item }: { item: ResutarantsProps }) => {
  return (
    <Pressable className="flex flex-row items-center gap-4">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <View className="flex items-start flex-col gap-2">
        <Text className="text-black font-semibold" numberOfLines={2}>
          {item.name}
        </Text>
        <View className="flex flex-row items-center gap-1 font-semibold">
          <Ionicons name="star" size={16} color="#ca8a04" className="text-center" />
          <Text>5.0</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantListItem;
