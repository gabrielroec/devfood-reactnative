import { View, Text, Pressable } from "react-native";

interface SectionProps {
  title: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
  action: () => void;
}
const Section = ({ title, size, label, action }: SectionProps) => {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Text className={`${size} font-semibold my-4 self-start`}>{title}</Text>

      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Section;
