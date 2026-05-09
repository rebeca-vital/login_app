import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7c6d9",
      }}
>
      <Text style={{ fontSize:40, fontWeight: "bold", color: "#3b5998",}}>ORKUT</Text>
      <Text style={{ color:"black", fontSize: 20, marginBottom: 20,}}>Conecte-se aos seus amigos</Text>
      <View
      style={{
        backgroundColor: "white",
        padding: 100,
        borderRadius: 10,
      }}>
        <Button title="Entrar"></Button>
      </View>
    </View>
  );
}
