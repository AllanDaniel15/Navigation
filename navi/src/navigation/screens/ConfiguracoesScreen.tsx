import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        ⚙️ Tela Configurações
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});