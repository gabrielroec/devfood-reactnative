import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#121212" className="text-center" />
      </Pressable>
      <View className="flex flex-col items-center justify-center gap-1">
        <Text className="text-center text-sm text-slate-600">Localização</Text>
        <View className="flex flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={20} color="red" className="text-center" />
          <Text className="text-lg font-bold">São Paulo</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color="#121212" className="text-center" />
      </Pressable>
    </View>
  );
}
