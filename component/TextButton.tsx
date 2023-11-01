import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS } from "../constants";
const TextButton = ({
  contentContainerStyle,
  label,
  labelStyle,
  onPress,
}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.primary500,
        ...contentContainerStyle,
      }}>
      <Text
        style={{
          ...FONTS.h3,
          color: "white",
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
