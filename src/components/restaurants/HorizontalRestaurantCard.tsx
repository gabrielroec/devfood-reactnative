import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { ResutarantsProps } from "../trendingRestaurants/Restaurants";
const HorizontalRestaurantCard = ({ restaurant }: { restaurant: ResutarantsProps }) => {
  return (
    <Pressable className="flex flex-col items-center justify-center">
      <Image source={{ uri: restaurant.image }} className="w-20 h-20 rounded-full" />
      <Text className="text-sm mt-2 w-20 text-center leading-2 text-black" numberOfLines={2}>
        {restaurant.name}
      </Text>
    </Pressable>
  );
};

export default HorizontalRestaurantCard;
