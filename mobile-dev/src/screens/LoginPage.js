import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg-login-regist.png")} style={styles.backgroundImage}>
        <View style={styles.formContainer}>
          <Text style={styles.textLogin}>Login!</Text>
          <View style={styles.input}>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} name="email-outline" size={24} color="#ACACAC" />
            <TextInput style={{ flex: 1 }} placeholder="Email" />
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons style={{ paddingRight: 10 }} name="lock-outline" size={24} color="#ACACAC" />
            <TextInput style={{ flex: 1 }} secureTextEntry={true} placeholder="Password" />
          </View>
          <View style={{ marginBottom: "15%" }} />
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginBottom: "20%" }}>
            <Text style={styles.textForgot}>Don't have a account</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.textCreate}>Create New</Text>
            </TouchableOpacity>
          </View>
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
  textForgot: {
    color: "#0386EE",
    alignSelf: "flex-start",
  },

  textCreate: {
    color: "#0386EE",
    fontSize: 16,
  },
});

export default LoginPage;
