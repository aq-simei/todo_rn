import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const styles = StyleSheet.create({
  noteHighlights: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  highlightContainer: {
    flexDirection: "row",
    width: "44%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  activeHighlightField: {
    fontFamily: "Inter-Bold",
    color: colors.blue,
    fontSize: 18,
  },
  finishedHighlightField: {
    fontFamily: "Inter-Bold",
    color: colors.purpleDark,
    fontSize: 18,
  },
  highLightCount: {
    fontFamily: "Inter-Bold",
    color: colors.gray100,
    fontSize: 14,
    backgroundColor: colors.gray400,
    marginLeft: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50,
    elevation: 5,
  },
});
