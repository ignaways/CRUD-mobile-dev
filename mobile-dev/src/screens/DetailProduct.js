import { StyleSheet, View, Text, TouchableOpacity, Modal, Pressable, Dimensions, Image, } from "react-native";
import { useState } from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const numColumns = 1;
const titleSize = screenWidth / numColumns;
const test = [{ label: "Pria" }, { label: "Wanita" }];

const DetailProduct = (data) => {
  const navigation = useNavigation();
  const [item, setitem] = useState(data.route.params);
  const [sizeValue, setSizeValue] = useState("M");
  const [genderValue, setGenderValue] = useState("Pria");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
        <Image source={{ uri: item.imgUrl }} style={{ height: titleSize, width: "100%", resizeMode: "contain" }} />
        <Text style={{ fontWeight: "bold", fontSize: 32 }}>{item.name}</Text>
        <Text style={{ fontSize: 24, color: "red" }}>Rp {item.price}</Text>

        <View style={{ marginVertical: 10 }} />

        <Text style={{ fontSize: 16, color: "black" }}>Pilih jenis kelamin</Text>
        <RadioButtonRN data={test} box={false} circleSize={14} textStyle={{ fontSize: 16 }} selectedBtn={(e) => setGenderValue(e)} />

        <View style={{ marginVertical: 10 }} />

        <Text style={{ fontSize: 16, color: "black" }}>Pilih ukuran</Text>
        <View style={{ backgroundColor: "pink" }}>
          <Picker style={{ backgroundColor: "#EBEBEB" }} selectedValue={sizeValue} onValueChange={(itemValue, itemIndex) => setSizeValue(itemValue)}>
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="L" value="L" />
            <Picker.Item label="XL" value="XL" />
            <Picker.Item label="XXL" value="XXL" />
          </Picker>
        </View>
        <View style={{ marginVertical: 10 }} />
      </View>

      <TouchableOpacity style={styles.buttonLogin} onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>+ Keranjang</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView2}>
          <View style={styles.modalView}>
            <Image style={styles.image} source={require("../../assets/imgCart.png")} />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Produk berhasil ditambahkan</Text>
            <Text style={{ fontSize: 14 }}>Cek keranjangmu untuk lihat produk</Text>

            <Pressable style={styles.buttonCheckout} onPress={() => navigation.navigate('cart',{name:item.name, size:sizeValue, price:item.price, imgUrl:item.imgUrl})}>
              <Text style={styles.textStyle}>Lihat keranjang</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonLogin: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#0386EE",
    borderRadius: 15,
    width: "90%",
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    paddingTop: 5,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  buttonCheckout: {
    width: "100%",
    backgroundColor: "#0386EE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
    elevation: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailProduct;
