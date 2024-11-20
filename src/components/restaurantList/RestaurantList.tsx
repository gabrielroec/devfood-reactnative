import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import HorizontalRestaurantCard from "../restaurants/HorizontalRestaurantCard";
import RestaurantListItem from "../restaurantListItem/RestaurantListItem";

export interface ResutarantsProps {
  id: string;
  name: string;
  image: string;
}
const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<ResutarantsProps[]>([]);
  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch("http://192.168.100.4:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFoods();
  }, []);
  return (
    <View className=" flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantListItem key={restaurant.id} item={restaurant} />
      ))}
    </View>
  );
};

export default RestaurantList;
