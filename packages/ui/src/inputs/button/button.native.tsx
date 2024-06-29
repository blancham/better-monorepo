import { View, Text, StyleSheet } from "react-native";
import type { ButtonProps } from "./button.props";

export const Button = ({ text }: ButtonProps) => {
  return (
    <View>
      <Text style={styles.text}>{`Native + ${text}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
  },
});
