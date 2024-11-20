import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import CardHorizontalFood from "../food/CardHorizontalFood";
import HorizontalRestaurantCard from "../restaurants/HorizontalRestaurantCard";

export interface ResutarantsProps {
  id: string;
  name: string;
  image: string;
}
const Restaurants = () => {
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
    <FlatList
      horizontal={true}
      data={restaurants}
      renderItem={({ item }) => <HorizontalRestaurantCard restaurant={item} />}
      contentContainerStyle={{ gap: 14 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Restaurants;
