/* 
  TODO:
  1. Flatlist content escaping the modal
*/

import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../store/cartSlice";
import { AppDispatch, RootState } from "../store/store";
import CustomButton from "./CustomButton";

export default function CartModal() {

  const dispatch = useDispatch<AppDispatch>();
  const { showCart, cartItems } = useSelector((state: RootState) => state.cart);

  if (!showCart) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showCart}
      onRequestClose={() => dispatch(closeCart())}
    >
      <View style={cartModalStyles.backdrop}>
        <View style={cartModalStyles.container}>
          {/* Header */}
          <View style={cartModalStyles.header}>
            {/* Left side of the header */}
            <View
              style={[
                cartModalStyles.headerSection,
                { flex: 1, justifyContent: "flex-start" },
              ]}
            ></View>

            {/* Center of the header */}
            <View style={cartModalStyles.titleView}>
              <Text style={cartModalStyles.title}>Ostoskori</Text>
            </View>

            {/* Right side of the header */}
            <View
              style={[
                cartModalStyles.headerSection,
                { flex: 1, justifyContent: "flex-end" },
              ]}
            >
              <CustomButton
                icon={"close"}
                size={30}
                onPress={() => dispatch(closeCart())}
              />
            </View>
          </View>

          {/* Flatlist */}
          {cartItems.length == 0 ? (
            <Text style={cartModalStyles.emptyText}>Ostoskori on tyhjä</Text>
          ) : (
            <FlatList
              data={cartItems}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={cartModalStyles.item}>
                  <Text style={cartModalStyles.itemText}>
                    Materiaali: {item.material}
                  </Text>
                  <Text style={cartModalStyles.itemText}>
                    Määrä: {item.amount} kpl
                  </Text>
                  <Text style={cartModalStyles.itemText}>
                    Leveys: {item.width} mm
                  </Text>
                  <Text style={cartModalStyles.itemText}>
                    Pituus {item.length} mm
                  </Text>
                  <Text style={cartModalStyles.itemText}>
                    Paksuus: {item.thickness} mm
                  </Text>
                  {item.additionalInfo ? (
                    <Text style={cartModalStyles.itemText}>
                      Lisätiedot: {item.additionalInfo}
                    </Text>
                  ) : null}
                </View>
              )}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

const cartModalStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    height: "90%",
    margin: 20,
    backgroundColor: "white",
    alignSelf: "flex-end",
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: -6,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 14,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
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
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginVertical: 40,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%"
  },
  itemText: {
    fontSize: 16,
    fontWeight: "300",
  },
  itemInfo: {
    fontSize: 14,
    color: "#777",
    marginTop: 6,
    fontStyle: "italic",
    flexShrink: 1
  },
});
