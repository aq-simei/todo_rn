import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  FlatListContainer: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  FlatListContentContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: colors.gray400,
    borderWidth: 0.5,
    borderColor: colors.gray300,
    borderRadius: 24,
  },
});
