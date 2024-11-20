import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import CardHorizontalFood from "../food/CardHorizontalFood";

export interface Food {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

const Trending = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch("http://192.168.100.4:3000/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFoods();
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      contentContainerStyle={{ gap: 14 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Trending;
