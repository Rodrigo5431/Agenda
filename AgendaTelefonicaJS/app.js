function agenda() {
   let contatoNovo;
   let lista = [
      ["Rodrigo Coutinho", "(24) 99999-9999", "3000798", "aaaaa@sdsfsdaf"],
      ["Rodrigo Lima", "(24) 88888 8888", "484664", "dfssfd@jhglglhk"],
      ["Lucas Lima", "(21) 77777 7171", "466556", "gsdfghf@jhk"]
   ];
   let select;
   let nome;
   let dataNasc;
   let numero;
   let email;
   let contador = 1;
   let id;
   let listaDeFavoritos = [];
   let resposta

   function adicionarContato() {

      id = contador++;
      nome = prompt("Digite o nome do contato");
      dataNasc = prompt("Digite a data de nascimento");
      numero = prompt("Telefone do contato");
      email = prompt("Digite o e-mail do contato");
      contatoNovo = [id, nome, numero, dataNasc, email];
      lista.push(contatoNovo);
      resposta = prompt(" Deseja adicionar a lista de favoritos? \n1. Sim \n2.Não");
      if (resposta == 1) {
         listaDeFavoritos.push(contatoNovo);
         alert(`Sua lista de favoritos! \n${listaDeFavoritos.join("\n")}`);

      } else {
         alert("Contato Salvo");
      }
   }

   function listarContatos() {
      alert(`Sua lista de contatos! ${lista.join("\n")}`);
   }
   function listarFavoritos() {
      alert(`Sua lista de favoritos! \n${listaDeFavoritos.join("\n")}`);
   }

   function excluirContato() {
      let escolha = prompt(`Contato que deseja excluir: \n${lista.join("\n")}`);
      lista.splice(escolha - 1, 1);

   }

   function adicionarFavoritos() {
      let escolhaF = prompt(`Quem você deseja adiconar aos favoritos?\n\n${lista.join("\n")}`);
      let contatoSelecionado = lista[escolhaF - 1];
      listaDeFavoritos.push(contatoSelecionado);
      alert(`Sua lista de favoritos! \n${listaDeFavoritos.join("\n")}`);
   }
   function editarContato() {
      let edicao = prompt(`Qual contato deseja editar?\n \n${lista.join("\n")}`);
      let selecionado = lista;
      selecionado.splice(edicao -1, 1);
      id = contador++;
      nome = prompt("Digite o nome do contato");
      dataNasc = prompt("Digite a data de nascimento");
      numero = prompt("Telefone do contato");
      email = prompt("Digite o e-mail do contato");
      contatoNovo = [id, nome, numero, dataNasc, email];
      lista.push(contatoNovo);
      listaDeFavoritos.push(contatoNovo);
      listarContatos();

   }


   while (select != 6) {
      select = parseInt(prompt("Agenda telefônica!! \n \n1. Adicionar Novo Contato \n2. Editar Contato \n3. Excluir Contato \n4. Adicionar Favoritos \n5. Lista de Contatos \n6. Lista de Favoritos"));

      switch (select) {
         case 1:
            adicionarContato();
            break;

         case 2:
            editarContato();
            break;

         case 3:
            excluirContato();
            break;

         case 4:
            adicionarFavoritos();
            break;

         case 5:
            listarContatos();
            break;

         case 6:
            listarFavoritos();
            break;


         default:
            alert("Opção inválida, escolha uma opção válida");
            agenda();
      }
   }
}

agenda();
