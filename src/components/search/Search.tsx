import { View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const Search = () => {
  return (
    <View className="flex flex-row items-center gap-2 px-4 py-2 bg-white rounded-full">
      <Feather name="search" size={24} color="#64748b" />
      <TextInput placeholder="O que deseja comer hoje?" className="text-lg w-full h-full flex-1" />
    </View>
  );
};

export default Search;
