import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Property from "./components/Property";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateProperty from "./screen/CreateProperty";


function HomeScreen({navigation}: any) {
  const handleTask = () => {
    Keyboard.dismiss();
    navigation.navigate('New Listing')
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.header}>Find your dream homestay.</Text>
          <StatusBar style="auto" />
          <Property />
        </ScrollView>
      </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1 , backgroundColor: "#fff"  }}>
      <CreateProperty />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New Listing" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f0f8ff",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  addWrapper: {
    width: 30,
    height: 30,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#808080",
    borderWidth: 1,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35,
    color: "#808080",
  },
  addText: {
    position: "relative",
    bottom: 2,
  },
});
