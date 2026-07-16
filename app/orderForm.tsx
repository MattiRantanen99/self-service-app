import { useRouter } from "expo-router";
import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import CustomTextInput from "./components/CustomTextInput";

// Validation
import CustomButton from "./components/CustomButton";
import orderValidationSchema from "./validation/orderValidationSchema";

// Redux store
import { useDispatch, useSelector } from "react-redux";
import { addToCart, openCart } from "./store/cartSlice";
import { AppDispatch, RootState } from "./store/store";
import CartModal from "./components/CartModal";

export default function OrderForm() {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <SafeAreaView style={orderFormStyles.container}>
      <View style={orderFormStyles.section}>
        {/* Header */}
        <View style={orderFormStyles.header}>
          {/* Left side of the header */}
          <View
            style={[
              orderFormStyles.headerSection,
              { flex: 1, justifyContent: "flex-start" },
            ]}
          >
            <CustomButton icon={"arrow-left"} onPress={() => router.back()} />
          </View>

          {/* Center of the header */}
          <View style={orderFormStyles.titleView}>
            <Text style={orderFormStyles.title}>Tilauslomake</Text>
          </View>

          {/* Right side of the header */}
          <View
            style={[
              orderFormStyles.headerSection,
              { flex: 1, justifyContent: "flex-end" },
            ]}
          >
            <CustomButton icon={"shopping-cart"} onPress={() => dispatch(openCart())} />
            <CustomButton icon={"question-circle"} onPress={() => null} />
          </View>
        </View>

        {/* Form */}
        <Formik
          initialValues={{
            material: "",
            width: "",
            length: "",
            thickness: "",
            amount: "",
            additionalInfo: "",
          }}
          validationSchema={orderValidationSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(addToCart(values));
            dispatch(openCart());
            resetForm();
          }}
        >
          {({ values, touched, errors, handleChange, handleSubmit }) => (
            <View style={orderFormStyles.formView}>
              {/* Material */}
              <CustomTextInput
                placeholder={"Materiaali"}
                value={values.material}
                onChangeText={handleChange("material")}
                invalid={touched.material ? errors.material : undefined}
                touched={touched.material}
                width={"90%"}
              />

              {/* Dimensions */}
              <View style={orderFormStyles.dimensionsView}>
                <CustomTextInput
                  placeholder={"Leveys (mm)"}
                  value={values.width}
                  onChangeText={handleChange("width")}
                  invalid={touched.width ? errors.width : undefined}
                  touched={touched.width}
                />
                <CustomTextInput
                  placeholder={"Pituus (mm)"}
                  value={values.length}
                  onChangeText={handleChange("length")}
                  invalid={touched.length ? errors.length : undefined}
                  touched={touched.length}
                />
                <CustomTextInput
                  placeholder={"Paksuus (mm)"}
                  value={values.thickness}
                  onChangeText={handleChange("thickness")}
                  invalid={touched.thickness ? errors.thickness : undefined}
                  touched={touched.thickness}
                />
                <CustomTextInput
                  placeholder={"Kpl"}
                  value={values.amount}
                  onChangeText={handleChange("amount")}
                  invalid={touched.amount ? errors.amount : undefined}
                  touched={touched.amount}
                />
              </View>

              {/* Additional info (multiline) */}
              <CustomTextInput
                placeholder={"Lisätietoa tilauksesta..."}
                multiline={true}
                numberOfLines={50}
                value={values.additionalInfo}
                onChangeText={handleChange("additionalInfo")}
                invalid={
                  touched.additionalInfo ? errors.additionalInfo : undefined
                }
                touched={touched.additionalInfo}
                width={"90%"}
                height={200}
              />

              {/* Buttons */}
              <View style={orderFormStyles.buttonView}>
                <CustomButton
                  iconSet="MaterialIcons"
                  icon={"add-shopping-cart"}
                  size={60}
                  onPress={handleSubmit}
                />
                <CustomButton
                  icon={"arrow-right"}
                  size={60}
                  onPress={() => null}
                />
              </View>

              {/* Modals */}
              <CartModal />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const orderFormStyles = StyleSheet.create({
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
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    gap: 30,
  },
  dimensionsView: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  buttonView: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
});
