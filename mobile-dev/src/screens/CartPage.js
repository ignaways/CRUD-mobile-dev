import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useState } from "react";

export default function CartPage(item) {
    const [data, setData] = useState(item.route.params);
    
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <View style={{ marginTop: 20 }} />
          <View style={styles.card}>
            <View style={{ justifyContent: "center" }}>
            <Image source={{ uri: data.imgUrl }} style={styles.Image} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.title}>{data.name}</Text>
              <Text style={styles.subTitle}>size: {data.size}</Text>
              <Text style={styles.subTitle}>Rp {data.price}</Text>
            </View>
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    padding: 5,
    margin: 5,
    backgroundColor: "white",
    width: "90%",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0386EE",
  },
  subTitle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "#929292",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: "#929292",
    width: "70%",
  },
  Image: {
    height: 100,
    width: 100,
    marginRight: 20,
    resizeMode: "contain",
  },

  logo: {
    width: 230,
    resizeMode: "contain",
    marginBottom: "20%",
  },
});
