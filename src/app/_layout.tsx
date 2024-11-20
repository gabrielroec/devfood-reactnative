import "../styles/global.css";
import { StatusBar } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden />

      <Slot />
    </>
  );
}
