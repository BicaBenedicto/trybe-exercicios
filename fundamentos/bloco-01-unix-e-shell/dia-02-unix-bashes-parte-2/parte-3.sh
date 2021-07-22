Parte III - Processos & Jobs

01 - Liste todos os processos;

> ps

02 - Agora use o comando sleep 30 & ;

> sleep 30 &

03 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;

> ps
> kill 148130

04 - Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

> sleep 30
Ctrl + Z
> bg

05 - Crie um processo em background que rode o comando sleep por 300 segundos.

> sleep 300 &

06 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
   |Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.

> sleep 200
Ctrl + Z
> sleep 100
Ctrl + Z

07 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
   |Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.

> jobs
> fg %1
Ctrl + Z

08 - Retome a execução do processo sleep 100 em background com o comando bg .

> bg %1

09 - Termine a execução de todos os processos sleep (mate os processos) .

> kill %1 %2 %3


