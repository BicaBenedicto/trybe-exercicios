Parte II - Manipulação & Busca

01 - Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

> cd unix_tests
> curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

02 - Mostre todo o conteúdo do arquivo countries.txt na tela.

> cat countries.txt

03 - Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .

> less countries.txt

04 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .

> less countries.txt
/Zambia

05 - Busque por Brazil no countries.txt .

> grep Brazil countries.txt

06 - Busque novamente por brazil , mas agora utilizando o lower case .

> grep -i brazil countries.txt

07 - Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

> cat > phrases.txt
Mãe to Trybe!
Aprender a aprender
Um passo de cada vez
Sorvete de chocolate

08 - Busque pelas frases que não contenham a palavra fox .

> grep -v fox phrases.txt


09 - Conte o número de palavras do arquivo phrases.txt .

> wc -w phrases.txt
15 phrases.txt


10 - Conte o número de linhas do arquivo phrases.txt .


> wc -l phrases.txt
4 phrases.txt


11 - Crie os arquivos empty.tbt e empty.pdf .

> touch empty.tbt empty.pdf

12 - Liste todos os arquivos do diretório unix_tests .

> ls
countries.txt  empty.pdf  empty.tbt  phrases.txt


13 - Liste todos os arquivos que terminem com txt .

> ls *.txt
countries.txt  phrases.txt


14 - Liste todos os arquivos que terminem com tbt ou txt .

> ls *.txt *.tbt
countries.txt  empty.tbt  phrases.txt


15 - Acesse o manual do comando ls .

> man ls


