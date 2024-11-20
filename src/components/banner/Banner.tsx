import { View, Text, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

const banners = [
  { id: 1, image: require("../../../assets/images/banner1.png") },
  { id: 2, image: require("../../../assets/images/banner2.png") },
];
export default function Banner() {
  return (
    <View className="w-full h-48 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        {banners.map((banner) => (
          <Pressable key={banner.id}>
            <Image source={banner.image} className="w-full h-full rounded-2xl" />
          </Pressable>
        ))}
      </PagerView>
    </View>
  );
}
