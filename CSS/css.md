Introduçao

O que significa css?

    Cascading Style Sheet
    Código para criar estilos no html
    Html é a estrutura, CSS é a beleza
    Não é uma linguagem de programação
    É uma linguagem de style sheet

Comentários

    Não irá afetar o seu código
    Ajuda a lembrar blocos de códigos
    Deixa dicas para leitura
    Ajuda outros a entenderem
    Nunca esqueça de fechar um comentário aberto
    
    Comentários começam com /* e terminam com */.

Anatomia

        css
     h1{ 
         color: blue;
         font-size: 60px;
         background: gray;
     }   

    Selector
    Declaration
    Properties
    Property Value

Selectors

        Conecta um elemento html com o css

    Tipos

        Global selector `*`
        Element/Type selector h1, h2, p, div
        ID selector #box, #container
        Class selector .red, .m-4
        Attribute selector, Pseudo-class, Pseudo-elemente, e outros

Caixas

    Vocâ irá percerber que (quase) tudo são caixas do css
    Posicionamentos, tamanhos, espaçamentos, bordas, cores
    Caixa pode ficar ao lado uma da outra, ou acima
    Elementos html são caixas


Adicionando css

    inline
    atributo style

    <style>
    tag html que irá conter o css

    <link>
    arquivo css externo

    @import
    arquivo css externo

Cascata

    A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento

    Seu estilo é lido de cima para baixo

    É levado em consideração 3 fatores

    1 Origem
    2 Escecificidade
    3 Importancia

        Origem do estilo

        inline > tag style > tag link

        Especificidade

        É um calculo matematico, onde, cada tipo de seletor e origem do estilo possuem valores a serem considerados. 

        0. Universal selector, combinators e negation pseudo-class (::not)
        1. Element type selector e pseudo-elements (::before, ::after)
        10. Classes  e attribute selectors (type=radio)
        100. ID selector
        1000. Inline

        A regra !important

        *cuidado, evite o uso
        *não é considerado uma boa pratica
        *quebra o fluxo natural da cascata

At Rules

    Esta relacionado ao comportamento do CSS
    Começa com sinal de @ seguido do identificador e valor

     Exemplos comuns

        -@import   /incluir um CSS externo/
        -@media    /regras condicionais para dispositivos/
        -@font-face  /fontes externas/
        -@keyframes /Animation/

Shorthand

    junção de propriedades
    resumido
    legivel

    Detalhes

    não irá considerar propriedades anteriores
    valores não especificados irão assumir valor padrão
    geralmente, a ordem descrita não importa, mas se houver muitas propriedades 
    com valores semelhantes, poderemos encontrar problemas

    Propriedades que aceitam shorthand: background, font, margin, border, border-top, border-right, 
    border-bottom, border-left, border-width, border-color, border-style, transition, 
    animation, transform, padding, list-style, border-radius.

Funções

    nome seguido de abre e fecha parêntese
    recebe argumento

Vendor prefixes

    Permite que browsers adicione "features"
    afim de colocar em uso alguma novidade que vemos no CSS

    exemplo

    webkit - chrome, safari, ios e android
    moz -  firefox
    ms -  internet explorer
    o - opera