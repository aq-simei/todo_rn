import { StatusBar, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { colors } from "./themes/colors";
import * as Fonts from "expo-font";
import { useEffect, useState } from "react";
import { NoteList } from "./components/NoteList";
import { InputGuide } from "./components/InputGuide";
import { Header } from "./components/Header";
import { Highlights } from "./components/Highlights";

export interface Note {
  id: string;
  content: string;
}
export default function App() {
  const [noteInputField, setNoteInputField] = useState("");

  const [allNotes, setAllNotes] = useState<Note[]>([]);

  const handleRemoveNote = (id: string) => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleTextInputChanged = (text: string) => {
    setNoteInputField(text);
  };

  const handleConfirmAddNote = () => {
    if (noteInputField.length > 0) {
      setAllNotes((prevNotes) => [
        ...prevNotes,
        { id: allNotes.length.toString(), content: noteInputField },
      ]);
      setNoteInputField("");
    }
  };

  const loadFonts = async () => {
    await Fonts.loadAsync({
      Inter: require("./assets/fonts/Inter-Regular.ttf"),
      "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
      "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    });
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loadResources() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadResources();
  }, []);
  if (!fontsLoaded) return null;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.gray500,
      paddingBottom: 16,
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar barStyle="light-content" />
      <InputGuide
        value={noteInputField}
        onChange={handleTextInputChanged}
        onConfirm={handleConfirmAddNote}
      />
      <Highlights activeData={allNotes.length} finishedData={0} />
      <NoteList notes={allNotes} removeNote={handleRemoveNote} />
    </View>
  );
}
