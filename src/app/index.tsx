import { Text, View, ScrollView } from "react-native";
import Header from "../components/header/Header";
import Constants from "expo-constants";
import Banner from "../components/banner/Banner";
import Search from "../components/search/Search";
import Section from "../components/section/Section";
import Trending from "../components/trending/Trending";
import Restaurants from "../components/trendingRestaurants/Restaurants";
import RestaurantList from "../components/restaurantList/RestaurantList";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsHorizontalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
        <Section
          title="Categorias"
          size="text-2xl"
          label="Ver todas"
          action={() => {
            console.log("CLICOU");
          }}
        />
        <Trending />
        <Section
          title="Famosos no App"
          size="text-xl"
          label="Veja todos"
          action={() => {
            console.log("CLICOU");
          }}
        />
        <Restaurants />

        <Section
          title="Restaurantes"
          size="text-xl"
          label="Veja todos"
          action={() => {
            console.log("CLICOU");
          }}
        />

        <RestaurantList />
      </View>
    </ScrollView>
  );
}
