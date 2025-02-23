import React, {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

function ChatbotScreen() {
    const [duration, setDuration] = useState('');
    const [period, setPeriod] = useState('');
    const [preferences, setPreferences] = useState('');
    const [activeMode, setActiveMode] = useState('5');
    const [response, setResponse] = useState(null);

    const handleRequest = () => {
        // Simulate API call
        setResponse(`Voyage de ${duration} jours en ${period} avec préférences: ${preferences} et mode actif: ${activeMode}`);
    };

    return (
        <View>
            <Text>Durée du voyage:</Text>
            <TextInput value={duration} onChangeText={setDuration} placeholder="Durée" keyboardType="numeric" />
            <Text>Période:</Text>
            <TextInput value={period} onChangeText={setPeriod} placeholder="Période" />
            <Text>Préférences:</Text>
            <TextInput value={preferences} onChangeText={setPreferences} placeholder="Sportif, détente..." />
            <Text>Mode Actif (0-10):</Text>
            <TextInput value={activeMode} onChangeText={setActiveMode} placeholder="0 à 10" keyboardType="numeric" />
            <Button title="Demander un voyage" onPress={handleRequest} />
            {response && <Text>Réponse: {response}</Text>}
        </View>
    );
}

export default ChatbotScreen;
