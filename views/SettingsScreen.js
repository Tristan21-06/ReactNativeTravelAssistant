import React from "react";
import {Text, TextInput, View} from "react-native";

function SettingsScreen() {
    return (
        <View>
            <Text>Configuration du Prompt</Text>
            <TextInput placeholder="Détails des paramètres..." />
        </View>
    );
}

export default SettingsScreen;