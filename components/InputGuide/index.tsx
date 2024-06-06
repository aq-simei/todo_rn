import { TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../themes/colors";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
interface InputGuideProps {
  value: string;
  onChange: (arg: string) => void;
  onConfirm: () => void;
}
export const InputGuide = ({ value, onChange, onConfirm }: InputGuideProps) => {
  return (
    <View style={styles.inputGuideContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Note title"
        placeholderTextColor={colors.gray300}
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity
        style={styles.newTodo}
        activeOpacity={0.7}
        onPress={onConfirm}
      >
        <Icon name="plus" size={20} color={colors.gray100} />
      </TouchableOpacity>
    </View>
  );
};
