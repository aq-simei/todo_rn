import { View, Image, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const Header = () => {
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: 150,
      backgroundColor: colors.gray700,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/Logo.png")}
        height={110}
        width={32}
      />
    </View>
  );
};
