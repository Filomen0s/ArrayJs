// 1

 let produtosLoja = ["Camiseta", "calça", "Sapato"]

 alert("Seus produtos são: " + produtosLoja)
    
 alert("ADICIONANDO PRODUTO")
 produtosLoja.push("Meia")

 alert("Seus produtos são: " + produtosLoja)

 alert("REMOVENDO PRODUTO")
 produtosLoja.pop("Calça")

 alert("Seus produtos são: " + produtosLoja)

 alert("ATUALIZANDO PRODUTO")
 produtosLoja[1] = "Bermuda"

 alert("Seus produtos são: " + produtosLoja)

 // 2

 let listaCompras = 
 [prompt("Escolha o primeiro produto"), 
 prompt("Escolha o segundo produto"), 
 prompt("Escolha o terceiro produto")]

 if(listaCompras[2] != "Leite" || listaCompras[2] != "leite"){
    listaCompras.push("Leite")
 }

 // 3

let numerosBaitas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let i = 0; i < 10; i++){
    numerosBaitas.pop()
}

alert(numerosBaitas)

// 4

let tarefas = 
[prompt("Primeira tarefa"),
prompt("segunda tarefa"),
prompt("terceira tarefa")]

alert(tarefas)

tarefas.pop(tarefas[1])
tarefas.push("Ligar para o médico")

alert(tarefas)

/// 5

let filmesFavoritos = 
 [prompt("Escolha o primeiro filme"), 
 prompt("Escolha o segundo filme"), 
 prompt("Escolha o terceiro filme")]

 if(filmesFavoritos[2] != "Harry Potter" || filmesFavoritos[2] != "leite"){
    filmesFavoritos.push("Harry Potter")
 }

 alert(filmesFavoritos)

 // 6

 let carrinho = ["Camiseta", "calça", "Sapato"]

 alert("Seus produtos são: " + carrinho)
    
 alert("REMOVENDO PRODUTO")
 carrinho.push(carrinho[0])

 carrinho[1] = "Tenis"

 alert(carrinho)

 // 7

 let exerciciosSemana = 
 ["corrida", 
 "flexões", 
 "abdominais"]

 if(exerciciosSemana[2] != "alongamento" || exerciciosSemana[2] != "leite"){
    exerciciosSemana.push("alongamento")
 }

 // 8

 let tarefaLimpezas = 
[prompt("Primeira tarefa"),
prompt("segunda tarefa"),
prompt("terceira tarefa"),
prompt("quarta tarefa")]

alert(tarefaLimpezas)

tarefaLimpezas.pop(tarefaLimpezas[2])
tarefaLimpezas[1] = "Limpar banheiro"

alert(tarefaLimpezas)

// 9

let metasSemana = 
[prompt("Primeira meta"),
prompt("segunda meta"),
prompt("terceira meta")]

if(metasSemana[1] != "exercício físico"){
   metasSemana[1] = "praticar esportes"
}

alert(metasSemana)

// 10

let numerosMalucos = [0,6,44,3,2,5,6,7,5,96]
alert(numerosMalucos)

let pedido = prompt("Escolha um dis numeros do array para uma verificação: ")

let posicao = []

for(let i = 0; i < numerosMalucos.length; i++){

   if(numerosMalucos.length == pedido){
      posicao.push(i)
   }
}

if(posicao.length > 0){
   alert("Seu numero foi encontrado: " + pedido + " Nas seguintes posições: " + posicao)
}else {
   alert("Seu numero não foi encontrado")
}