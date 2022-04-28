import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";

const product = [
  { imgUrl: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445135/item/idgoods_56_445135.jpg?width=1008&impolicy=quality_75", name: "Zipper Woman", price: 425000 },
  { imgUrl: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/446618/item/idgoods_11_446618.jpg?width=1008&impolicy=quality_75", name: "T-Shirt Woman", price: 150000 },
  { imgUrl: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449039/item/idgoods_03_449039.jpg?width=1008&impolicy=quality_75", name: "Grey Hooded", price: 350000 },
  { imgUrl: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/448971/item/idgoods_63_448971.jpg?width=1008&impolicy=quality_75", name: "Hoodie Man", price: 250000 },
];

const ListProduct = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginTop:10}} />
        <SearchBar />
        <View style={{marginTop:10}} />
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", width: "90%" }}>
          {product.map((item, index) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Details", {
                  imgUrl: item.imgUrl,
                  name: item.name,
                  price: item.price,
                })
              }
              key={index}
            >
              <Image source={{ uri: item.imgUrl }} style={{ height: 200, width: "100%", borderRadius: 5 }} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>Rp {item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: "45%",
    elevation: 3,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
});

export default ListProduct;
