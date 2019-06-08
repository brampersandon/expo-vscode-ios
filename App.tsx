import React from 'react';
import { KeyboardAvoidingView, StyleSheet, WebView, View } from 'react-native';

// Change this to the URL of your coder.com instance
const VSCODE_URL = "https://coder.com"

// Change this to your VS Code top bar color
// (I use Solarized Light, I'm sorry (I'm not sorry))
const TOPBAR_COLOR = "#eee8d5"

export default function App() {
  return (
    <View style={{width: "100%", height: "100%"}}>
      <View style={{ backgroundColor: TOPBAR_COLOR, height: 20}}/>
      <KeyboardAvoidingView style={{width: "100%", height: "100%"}} behavior={"padding"} enabled>
        <WebView source={{ uri: VSCODE_URL }} style={styles.container} useWebKit={true} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});