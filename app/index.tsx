import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#bfd1e5",
        padding: 20,
      }}
>
      <Image source={ require("../assets/images/Logo_ORKUT.png") } 
        style={{ width: 180, height: 60, alignSelf:"center", marginBottom: 20 }} 
        resizeMode="contain"/>
      <Text style={{ color:"#555", fontSize: 16, marginBottom: 20, fontWeight: "500",}}>Conecte-se aos seus amigos</Text>
      
      // Formulário de login //
      <View
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        borderRadius: 8,
        shadowColor: "000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        }}>
        <Text style={{color: "black", fontWeight: "bold", marginBottom: 5}}>
          Login:
        </Text>
        <TextInput 
        style={{ borderWidth: 1,padding: 12, marginBottom: 15, borderColor: "#ccc", borderRadius: 4 }} 
        placeholder="Digite seu e-mail" />
        <Text style={{color: "black", fontWeight: "bold", marginBottom: 5}}>
          Senha:
        </Text>
        <TextInput 
        style={{ borderWidth: 1,padding: 12, marginBottom: 15, borderColor: "#ccc", borderRadius: 4 }} 
        placeholder="Digite sua senha" secureTextEntry />
        <TouchableOpacity
        style={{ backgroundColor: "#edeff4", padding: 10, borderRadius: 4, borderWidth: 1, 
        borderColor: "#abc", alignItems: "center" }}>
          <Text style={{color: "#3b5998", fontWeight: "bold"}}
          >Entrar</Text>
        </TouchableOpacity>
      </View>
      //recuperação de senha  e criar conta //
      <View 
      style={{ marginTop: 20, alignItems: "center" }}>
        <TouchableOpacity>
          <Text style={{color: "#3b5998", fontSize: 13, textDecorationLine: "underline"}}>Não consegue acessar sua conta?</Text>
          </TouchableOpacity>
          <Text style={{marginVertical: 15, color: "#999"}}>ou</Text>
          <TouchableOpacity style={{marginTop: 5}}>
            <Text style={{color: "#f58220", fontWeight: "bold", fontSize: 16}}>CRIAR CONTA</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
