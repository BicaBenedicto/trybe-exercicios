(Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do Unix? ☝ 🎊


01 - Abra o terminal e execute o comando sudo apt-get install cmatrix e, depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;

> sudo apt-get install cmatrix
> cmatrix

02 - Execute o comando sudo apt-get install fortune , após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;

> sudo apt-get install fortune
> fortune > fortune.txt

03 - Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;

> wc -l fortune.txt

04 - Execute o comando sudo apt-get install sl , após a instalação, execute o comando sl . Agora tente sl -F ;

> sudo apt-get install sl
> sl
> sl -F

05 - Execute o comando sudo apt-get install cowsay , após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;

> sudo apt-get install cowsay
> cowsay Muuuuuu
> cowsay | fortune.txt

06 - Descubra os fatores primos usando o comando factor e em seguida o número 42 ;

> factor 42

07 - Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .

> rev fortune.txt

08 - Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅

> telnet towel.blinkenlights.nl

