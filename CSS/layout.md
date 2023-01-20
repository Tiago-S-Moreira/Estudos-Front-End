Layouts e evolução

    Layout tem a ver com a maneira que os elementos estao distribuidos na tela

Normal Flow 

    Ow Flow Layout é a maneira que os elementos 'block' e 'inline'
    ficam na pagina    

Tables

    É a maneira de tabelas onde a tag 'table' recebe um display 'table'
    fazendo com que os elementos internos como 'td' e 'tr' possam ser 
    usados para montar uma tabela. 

    <html>
        <table>
            <tr>
                <td>Hora</td>
                <td>20:37</td>
            </tr>
        </table>
    </html> 

Tableless

    Uso de propriedades 'float', 'clear' para que os elementos possam
    mudar de posição na tela.

    <div style="float:left">esquerda</div>
    <div style="float:right">direita</div>

Flexbox

    A caixa se torna flex, fazendo com que os elementos internos
    possam receber melhor:

        Alinhamento
        Ordenação
        Tamanhos flexiveis

Terminologia

    Flex container
        Flex item
    Nesting
    Axis
        main
            start, end
        cross
            start, end  
    Flex sizing
        flexivel
        altera width, height dos itens para preenchimento dos espaços
        do flex container

Propriedades do Flex container

    Direçao dos itens

    Flex é uma dimensão (horizontal ou vertical)
    podemos mudar a direção com 'flex-direction'
    valores (row|row-reverse|column|column-reverse)

    Flex-wrap  (Multi linhas)

        Podemos usar multi linhas
        Cada nova linha, um novo flex container

    flex-flow

        shorthand
        flex-direction || flex-wrap

    

    Justify-content: (alinhamento)

        Alinhamento dos elementos dentro do container
        Distribuiçao dos elementos

        Valores

            flex-start
            flex-end
            center
            space-around
            space-between
            space-evenly
    
    Align-items:

        Alinhamento dos elementos no eixo cruzado

        valores 

            stretch
            flex-start
            flex-end
            center

    Gap (espaços entre os itens)

        Espaço entre os elementos

        valores

            Unidades de medidas
            fixas: px, pt
            flexiveis: %, em, rem

Propriedades para os itens

    flex-basis
    flex-grow:
    -O crescimento do item dentro do container em relação
    aos espaços vazios
    flex-shrink:
    -Encolher o item dentro do container
    flex:

    shorthand
    flex-grow flex-shrink flex basis
    podem ter 1, 2, ou 3 valores

    order
