import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  inputGuideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    transform: [{ translateY: -30 }],
  },
  inputField: {
    fontFamily: "Inter",
    width: "75%",
    height: 54,
    backgroundColor: colors.gray400,
    color: colors.gray300,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray700,
    elevation: 5,
  },
  newTodo: {
    width: 54,
    height: 54,
    backgroundColor: colors.blue,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
