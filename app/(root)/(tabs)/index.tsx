import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="my-10 font-rubik font-bold text-3xl">Welcome to Restate</Text>
    </View>
  );
}
