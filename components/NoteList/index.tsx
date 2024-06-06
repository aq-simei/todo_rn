import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Divider, RadioButton } from "react-native-paper";
import { colors } from "../../themes/colors";
import { Note } from "../../App";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
interface NoteListProps {
  notes: Note[];
  removeNote: (id: string) => void;
}

export const NoteList = ({ notes, removeNote }: NoteListProps) => {
  const [checked, setChecked] = useState("first");
  if (notes.length > 0) {
    return (
      <View>
        <FlatList
          data={notes}
          keyExtractor={(note) => note.id}
          renderItem={({ item }) => {
            return (
              <View>
                <RadioButton
                  value="first"
                  status={checked === "first" ? "unchecked" : "checked"}
                  onPress={() => setChecked("first")}
                />
                <Text
                  style={{
                    flex: 1,
                    color: colors.gray100,
                    fontSize: 14,
                    fontFamily: "Inter",
                  }}
                >
                  {item.content}
                </Text>
                <TouchableOpacity
                  onPress={() => removeNote(item.id)}
                  style={{ marginRight: 8 }}
                >
                  <Icon name="trash-alt" color={colors.gray300} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  } else {
    return (
      <>
        <Divider
          horizontalInset={true}
          style={{
            backgroundColor: colors.gray300,
            height: 0.5,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <Image
            source={require("../../assets/Clipboard.png")}
            width={56}
            height={56}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Bold",
                color: colors.gray300,
                fontSize: 16,
              }}
            >
              You don't have tasks created yet.
            </Text>
            <Text
              style={{
                fontFamily: "Inter",
                color: colors.gray300,
                fontSize: 16,
              }}
            >
              Create tasks and organize your to-dos!
            </Text>
          </View>
        </View>
      </>
    );
  }
};
