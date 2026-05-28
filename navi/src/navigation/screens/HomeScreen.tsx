import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🏠 Tela Home
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          navigation.navigate(
            'Perfil'
          )
        }
      >
        <Text style={styles.textoBotao}>
          Ir para Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          navigation.navigate(
            'Configurações'
          )
        }
      >
        <Text style={styles.textoBotao}>
          Ir para Configurações
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#1E90FF',
    padding: 15,
    width: 220,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});