import React, { useState } from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen() {
  const [novoContato, setNovoContato] = useState<string>(''); // variável global para o novo item da lista
  const [lista, setLista] = useState(['Ana', 'Bruno', 'Carlos']); // variável global da lista

  // função para adicionar contato
  function adicionarContato() {
    const listaCopia = Array.from(lista); // copia local da lista
    listaCopia.push(novoContato); // adicionando a lista local o novo contato
    setLista(listaCopia); // atualizando a global lista com base na lista local
  }

  // função para remover item da lista
  function removerContato(nome: string) {
    const listaCopia = Array.from(lista); // copia local da lista
    // antes de remover precisamos encontrar o Contato que será removido
    // para isso precisamos percorrer a lista até encontrar a sua posição
    for (let i = 0; i < listaCopia.length; i++) {
      if (listaCopia[i] == nome) { 
        listaCopia.splice(i, 1); // ao encontrar o Contato removemos com base no indice(sua posição no array)
        setLista(listaCopia) // atualiza a lista global com base na nova lista
        break;
      }
    }
  }

  // inicio resolução atividade desafiadora
  function iniciarAtualizacao(item: string) {
    Alert.prompt(
      'Atualizar Contato',
      'Digite o novo nome:',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Atualizar',
          onPress: (novoNome) => {
            if (novoNome && novoNome.trim()) {
              AtualizarContato(item, novoNome);
            }
          },
        },
      ],
      'plain-text',
      item
    );
  }

  // função para atualizar usuário
  function AtualizarContato(nomeAntigo: string, novoNome: string){
    const listaCopia = Array.from(lista);
    for (let i = 0; i < listaCopia.length; i++) {
      if (listaCopia[i] == nomeAntigo) { 
        listaCopia.splice(i, 1, novoNome);
        setLista(listaCopia)
        break;
      }
    }
  }

  // estilo de cada linha da lista
  function renderItem({ item }: { item: string }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item}</Text>
        <TouchableOpacity onPress={() => // botao de atualizar
          iniciarAtualizacao(item)} style={styles.updateButton}>
          <Text style={styles.removeButtonText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => // botao de remover
          removerContato(item)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do Contato"
            value={novoContato}
            onChangeText={setNovoContato}
          />
          <Button title="Adicionar" onPress={adicionarContato} />
        </View>
        <FlatList // renderização da lista
          data={lista} // fonte dos dados
          keyExtractor={(item) => item} // chave unica da lista
          renderItem={renderItem} // componente que será renderizado para cada item da lista
          ItemSeparatorComponent={() => <View style={styles.separator} />} // define o que será rendizado entre cada item da lista
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA', // opcional, mantém a mesma cor de fundo
  },
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#FFF',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  separator: {
    height: 16,
  },
  removeButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: '#1f5435',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});
