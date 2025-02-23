import React from "react";
import {FlatList, Text, View} from "react-native";
import SettingsScreen from "./SettingsScreen";

function TripsScreen() {
    const trips = [
        { id: '1', name: 'Paris - Musée du Louvre' },
        { id: '2', name: 'Chamonix - Randonnée Mont-Blanc' },
    ];

    return (
        <View>
            <Text>Liste des Voyages</Text>
            <FlatList
                data={trips}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
}

export default TripsScreen;
