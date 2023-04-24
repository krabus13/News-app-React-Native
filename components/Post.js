import { StyleSheet, Text, View, Image } from "react-native";

import React from "react";
const Post = ({ title, imageUrl, createAt }) => {
  return (
    <View>
      <Text style={styles.darova}></Text>
      <View style={styles.post}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ width: 100, height: 100, borderRadius: 22 }}
        />
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text style={styles.st}>{createAt}</Text>
        </View>
      </View>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  darova: {
    height: 24,
  },
  post: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 15,
    marginTop: -20,
  },
  postContent: {
    marginLeft: 20,
    flex: 1,
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  st: {
    fontSize: 15,
    fontWeight: 500,
    opacity: 0.4,
  },
});
