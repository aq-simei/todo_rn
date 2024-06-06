import { Text, View } from "react-native";
import { styles } from "./styles";

interface HighlightsProps {
  activeData: number;
  finishedData: number;
}
export const Highlights = ({ activeData, finishedData }: HighlightsProps) => {
  return (
    <View style={styles.noteHighlights}>
      <View style={styles.highlightContainer}>
        <Text style={styles.activeHighlightField}>Active</Text>
        <Text style={styles.highLightCount}>{activeData}</Text>
      </View>
      <View style={styles.highlightContainer}>
        <Text style={styles.finishedHighlightField}>Finished</Text>
        <Text style={styles.highLightCount}>{finishedData}</Text>
      </View>
    </View>
  );
};
