import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";

const App = () => {
  const size = useRef(new Animated.Value(100)).current;
  const position = useRef(new Animated.Value(0)).current;

  const increaseSize = () => {
    Animated.timing(size, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const decreaseSize = () => {
    Animated.timing(size, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const moveRight =()=>{
    Animated.timing(position, {
      toValue: 150,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }
  const moveLeft =()=>{
    Animated.timing(position, {
      toValue: -150,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }
  const initial_point =()=>{
    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        style={{
          marginBottom: 60,
          width: size,
          height: size,
          borderRadius: size._value / 2,
          transform: [{ translateX: position}],
        }}
        source={require("./assets/image1.png")}
      />
      <View style={styles.buttonRow}>
        <Button title="Tang Size" onPress={increaseSize} />
        <Button title="Giam Size" onPress={decreaseSize} />
        <Button title="qua trai" onPress={moveLeft} />
        <Button title="qua phai" onPress={moveRight} />
        <Button title="Diem Ban Dau" onPress={initial_point} />
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
    gap: 16,
  },
});

export default App;