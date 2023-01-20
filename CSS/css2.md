Valores e unidades de medida

    cada propriedade possui valores 'property value'    
    estudo constante a fim de entender as propriedades e seus valores

    Pratica

    como conhecer e estudar os valores na documentaçao?
        <color> <lenght>
    os termos podem variar, 'values' ou 'data types'    

Tipos numéricos

    <integer> numero inteiro como -10 ou 223
    <number> numero decimal como -2.4, 64 ou 0.234
    <dimension> é um <number> com uma unidade junto: 90deg, 2s, 8px
    <percentagem> representa a fração de outro numero: 50%

Unidades comuns

    <lenght> representa um valor de distancia: px, em, vw
    <angle> representa um angulo: deg, rad, turn
    <time> representa um tempo: s, ms
    <resolution> representa resoluções para dispositivos: dpi

Distancias absolutas <lenght>

    Sao fixas e nao alteram seu valor

    Unidade   Nome               Equivalencia
    cm       Centimetros         1cm = 96px/2.54
    in       inches(polegadas)   1in = 2.54cm = 96px
    px       pixels              1px = 1/96th of 1in

    o mais comum e mais utilizado é o 'px'
    nao recomendar usar cm

Distancia relativas

    São relativas a algum outro valor, poder ser o elemento pai, ou root, ou o tamanho da tela.

    Beneficio: maior adaptaç~so aos diferentes tipos de tela

    Unidade         Relativo a
    em              tamanho da font pai
    rem             tamanho da font do elemento raiz (root/html)
    vw              1% da viewport width
    vh              1% da viewport height

Porcentagens

    Em muitos casos é tratado da mesma maneira que as distâncias <lenght>
    sempre será relativo a algum valor

Posições

    <position>

    Representa um conjunto de coordenadas 2D:
    - top, right, bottom, left e center

    Usado para alguns tipos de propriedades
    Nao confundir com a propriedade 'position'

Funções

    Em programaçao, funções são reconhecidas por causar um reaproveitamento 
    do codigo.

    rgb()
    hsl()
    url()
    calc()

Strings e identificadores

    Strings: texto envolto em aspas
    Identificadores: red, black, gold;