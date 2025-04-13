// import { listaProdutos } from "../../data/list";
// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, FlatList, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

// export default function HomeScreen() {
//   const [novoNome, setNovoNome] = useState<string>('');

//   function adicionarProduto() {
//     const novoProduto = novoNome;
//     listaProdutos.push(novoProduto);
//     setNovoNome('');
//   }

//   // function removerProduto(nome: string) {
//   //   const novaLista = lista.filter((produto) => produto.nome !== nome);
//   //   setLista(novaLista);
//   // }

//   // function removerProduto(nome: string) {
//   //   // Criamos uma nova lista temporária vazia
//   //   const novaLista: Produto[] = [];
  
//   //   // Percorremos cada produto da lista atual
//   //   for (let i = 0; i < lista.length; i++) {
//   //     const produtoAtual = lista[i];
  
//   //     // Se o nome for diferente do nome que queremos remover,
//   //     // então adicionamos esse produto na nova lista
//   //     if (produtoAtual.nome !== nome) {
//   //       novaLista.push(produtoAtual);
//   //     }
//   //   }
//   //   // Agora atualizamos o estado com essa nova lista (sem o item removido)
//   //   setLista(novaLista);
//   // }

//   function renderItem({ item }: { item: String }) {
//     return (
//       <View style={styles.itemContainer}>
//         <Text style={styles.itemText}>{item}</Text>
//         {/* <TouchableOpacity onPress={() => removerProduto(item.nome)} style={styles.removeButton}>
//           <Text style={styles.removeButtonText}>Remover</Text>
//         </TouchableOpacity> */}
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Digite o nome do produto"
//             value={novoNome}
//             onChangeText={setNovoNome}
//           />
//           <Button title="Adicionar" onPress={adicionarProduto} />
//         </View>
//         <FlatList
//           data={listaProdutos}
//           keyExtractor={(item) => item}
//           renderItem={renderItem}
//           ItemSeparatorComponent={() => <View style={styles.separator} />}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#F8F9FA', // opcional, mantém a mesma cor de fundo
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//     alignItems: 'center',
//     gap: 8,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     height: 40,
//     backgroundColor: '#FFF',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   itemText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   separator: {
//     height: 16,
//   },
//   removeButton: {
//     backgroundColor: '#FF4D4D',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   removeButtonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
// });
