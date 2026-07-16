import { useRouter } from "expo-router";
import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import CustomTextInput from "./components/CustomTextInput";

export default function ContactForm() {

  return(
    <SafeAreaView style={contactFormStyles.container}>
      <View style={contactFormStyles.section}>
        
      {/* Header */}
      <View style={contactFormStyles.header}>
        {/* Left side of the header */}
        
      </View>

      </View>
    </SafeAreaView>
  )
}

const contactFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    display: "flex",
    width: "95%",
    height: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 14,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 65,
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleView: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    userSelect: "none",
  },
})