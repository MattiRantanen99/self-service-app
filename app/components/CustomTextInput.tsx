import { DimensionValue, StyleSheet, TextInput } from "react-native";

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  invalid?: string;
  touched?: boolean;
}

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  multiline = false,
  numberOfLines,
  width = "100%",
  height,
  invalid,
  touched,
}: CustomTextInputProps) {
  const isInvalid = touched && !!invalid;

  return (
    <TextInput
      placeholder={isInvalid ? invalid : placeholder}
      placeholderTextColor={isInvalid ? "red" : "#aaa"}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={[
        customTextInputStyles.container,
        { width },
        { height },
        isInvalid && { borderColor: "red", borderWidth: 2 },
      ]}
    />
  );
}

const customTextInputStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
