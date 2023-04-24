import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View, Text, TouchableOpacity } from "react-native";
import Post from "../components/Post";
import React from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { RefreshControl } from "react-native";

export default function Home({ navigation }) {
  const [items, setItems] = React.useState();
  const [isloading, setIsLoading] = React.useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://64464d2c0431e885f00e3ddd.mockapi.io/api/news/nw")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Помилка при отриманні постів :(");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Franklin demi Italy": require("../font.ttf"),
      });
    }
    loadFont();
  }, []);

  if (isloading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10, fontFamily: "Franklin demi Italy" }}>
          Завантаження...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ fontFamily: "Franklin demi Italy" }}>
      <StatusBar style="auto" backgroundColor="grey" />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isloading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Page", { id: item.id, title: item.title })
            }
          >
            <Post title={item.title} imageUrl={item.img} createAt={item.crt} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
