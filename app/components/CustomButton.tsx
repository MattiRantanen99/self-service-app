import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IconSet = "AntDesign" | "MaterialIcons";

type IconName<T extends IconSet> = T extends "AntDesign"
  ? keyof typeof AntDesign.glyphMap
  : T extends "MaterialIcons"
    ? keyof typeof MaterialIcons.glyphMap
    : never;

interface CustomButtonProps<T extends IconSet = "AntDesign"> {
  onPress: () => void;
  iconSet?: T;
  icon?: IconName<T>;
  size?: number;
  color?: string;
}

export default function CustomButton<T extends IconSet = 'AntDesign'>({
  onPress,
  iconSet = "AntDesign" as T,
  icon,
  size = 24,
  color = "black",
}: CustomButtonProps<T>) {
  const IconComponent = 
    iconSet === 'MaterialIcons' ? MaterialIcons
    : AntDesign;
  return (
    <Pressable style={customButtonStyles.container} onPress={onPress}>
      <IconComponent name={icon as any} size={size} color={color} />
    </Pressable>
  );
}

const customButtonStyles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 8,
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
});
