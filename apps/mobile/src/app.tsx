import type React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { Button } from "@kraaft/ui";
import { SharedBox } from "@kraaft/shared/components/SharedBox";

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Button text="Hello" />
      <SharedBox text="Foo" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282c34",
  },
});
