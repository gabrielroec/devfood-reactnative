import { View, Text, Pressable, Image } from "react-native";
import { Food } from "../trending/Trending";
import { Ionicons } from "@expo/vector-icons";

const CardHorizontalFood = ({ food }: { food: Food }) => {
  return (
    <Pressable className="flex flex-col rounded-xl relative">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />
      <View className="flex flex-row items-center gap-1 bg-neutral-900/90 rounded-full absolute top-2 right-2 px-2 py-1 justify-center">
        <Ionicons name="star" size={14} color="#ca8a04" className="text-center" />
        <Text className="text-white text-sm">{food.rating}</Text>
      </View>

      <Text className="text-lg font-medium text-green-600">R$ {food.price}</Text>
      <Text className=" text-black mt-1">{food.name}</Text>
      <Text className=" text-slate-600 mt-1 text-sm">
        {food.time} - R$ {food.delivery}
      </Text>
    </Pressable>
  );
};

export default CardHorizontalFood;
