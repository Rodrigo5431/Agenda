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
   // let ativo = true;

   function adicionarContato() {

      id = contador++;
      nome = prompt("Digite o nome do contato");
      dataNasc = prompt("Digite a data de nascimento");
      numero = prompt("Telefone do contato");
      email = prompt("Digite o e-mail do contato");
      contatoNovo = [id, nome, numero, dataNasc, email];
      lista.push(contatoNovo);
      alert("Contato Salvo");
   }

   function listarContatos() {
      alert(lista.join("\n"));
   }

   function excluirContato() {
      let escolha = prompt("Contato que deseja excluir" + listarContatos());
      lista.splice(escolha -1, 1);
      
   }
   
   
   
   while (select != 4) {
      select = parseInt(prompt("Agenda telefônica!! \n \n1. Adicionar Novo Contato \n2. Exibir Lista \n3. Excluir Contato "));
      
      switch (select) {
         case 1:
            adicionarContato();
            break;
            case 2:
               listarContatos();
               break;
               
               case 3:
                  excluirContato();
                  break;
                  
                  
                  default:
                     alert("Opção inválida, escolha uma opção válida");
                     agenda();
                  }
               }
               
               
            }
            // resposta = "";
            // for(let i=0; i < lista.length; i++){
            //    contato = lista[i];
            //    resposta = resposta + (`${i+1}- ${contato[0]}`) + "\n";
            agenda();
            