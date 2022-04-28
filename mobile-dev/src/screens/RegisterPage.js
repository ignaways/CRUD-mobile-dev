import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RegisterPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg-login-regist.png")} style={styles.backgroundImage}>
        <View style={styles.formContainer}>
          <Text style={styles.textLogin}>Sign Up</Text>
          <View style={styles.input}>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} name="account-outline" size={24} color="#ACACAC" />
            <TextInput style={{ flex: 1 }} placeholder="Nama Lengkap" />
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} name="email-outline" size={24} color="#ACACAC" />
            <TextInput style={{ flex: 1 }} placeholder="Email" />
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} name="lock-outline" size={24} color="#ACACAC" />
            <TextInput style={{ flex: 1 }} secureTextEntry={true} placeholder="Password" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={[styles.input, { marginRight: 10 }]} secureTextEntry={true} placeholder="+62" />
            <TextInput style={[styles.input, { flex: 5 }]} secureTextEntry={true} placeholder="Password" />
          </View>
          <View style={{ marginBottom: "15%" }} />
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textButton}>register</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginBottom: "20%" }} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    paddingHorizontal: "15%",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: "2%",
    width: "100%",
    alignItems: "center",
  },
  textLogin: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0386EE",
    marginBottom: "10%",
  },
  textLoginDescription: {
    fontSize: 16,
    color: "#0386EE",
  },
  input: {
    flexDirection: "row",
    marginVertical: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
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
    width: "100%",
  },
});

export default RegisterPage;
