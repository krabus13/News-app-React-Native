import axios from "axios";
import * as Font from "expo-font";
import React from "react";
import { View, Text, Image } from "react-native";

export const FullPagePost = ({ route, navigation }) => {
  const [data, setData] = React.useState();
  const { id, title } = route.params;

  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Franklin demi Italy": require("../font.ttf"),
      });
    }
    loadFont();
  }, []);

  React.useEffect(() => {
    navigation.setOptions({ title });
    axios
      .get("https://64464d2c0431e885f00e3ddd.mockapi.io/api/news/nw/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Помилка при отриманні поста :(");
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <>
          <Image
            style={{ height: 393, width: 393, borderRadius: 22 }}
            source={{ uri: data.img2 }}
          />
          <Text
            style={{
              margin: 22,
              fontSize: 20,
              fontFamily: "Franklin demi Italy",
            }}
          >
            {data.text}
          </Text>
          <Text
            style={{
              margin: 22,
              fontSize: 20,
              opacity: 0.4,
              fontFamily: "Franklin demi Italy",
            }}
          >
            Дата публікації: {data.crt}
          </Text>
        </>
      )}
    </View>
  );
};
