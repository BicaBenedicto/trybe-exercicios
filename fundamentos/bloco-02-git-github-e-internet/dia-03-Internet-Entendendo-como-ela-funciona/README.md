###Explicação sobre funcionamento da internet e Dinâmica em Grupo


#####Grupo 20 - Tryberinos
- Daniel Dias Barbosa
- Pedro Walpablôndy Soares
- Gabriel Pereira Benedicto
- Alexandre Luiz Scheffer Klimak
- Diego Augusto Martins Siqueira
- Mauricio Lopes de Oliveira
- Matheus Gabriel Silva dos Santos
----------------------------------------------
#####Discussão sobre:"Quando eu digito www.google.com no navegador e aperto "enter", o que acontece até o site aparecer para nós."
É enviado a informação para o servidor, que o cliente deseja acessar o endereço, realizando a requisição do HTTP para acessar, recebendo a informação do endereço de ip, conforme o passo a passo abaixo.
01. Você digita o endereço do site (URL) no navegador web > Como por exemplo www.google.com
02. O navegador procura o endereço IP para o nome do domínio e realizando a requisição ao DNS, convertendo o endereço do site em endereço do IP.
03. O navegador envia uma requisição HTTP para o servidor web
04. O servidor responde com um redirecionamento permanente ao Google
05. O browser segue o redirecionamento
06. O servidor trata a requisição
07. O servidor envia de volta uma resposta HTML
08. O navegador começa a renderização da página HTML
09. O navegador envia requisições para os objetos dentro do HTML
10. O navegador envia mais requisições assíncronas (AJAX)
--------------------
######Bibliografia:
https://boaglio.com/index.php/2011/05/02/o-que-realmente-acontece-quando-voce-acessa-uma-url/
