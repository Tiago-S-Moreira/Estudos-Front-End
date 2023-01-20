Box model

    Fundamental para fazer layouts para a web
    Maior facilidade para aplicar o css

    O que é?

    Uma caixa retangular
    Essa caixa possui propriedades de uma caixa (2d)

        Tamanho (largura x altura)    width/height
        Conteudo                      content
        Bordas                        border
        Preenchimento interno         padding
        Espaços fora da caixa         margin

    Cada elemento na sua pagina, sera considerado uma caixa

Display: block vs display: inline

    Como as caixas se comportam em relação as outras caixas
    Comportamento externo das caixas

    block: ocupa toda a linha, colocando o próximo elemento abaixo desse
    width e height são respeitados
    paddin, margin, border irão funcionar normalmente

    inline: elemento ao lado do outro
    width e height não funcionam
    somente valores horizontais de margin, padding e border

Margin

    Espaços entre os elementos

        margin-top - margin-right - margin-bottom - margin-left
        values <length> <percentagem> auto

    *cuidado com margin collapsing (top se ajunta ao bottom)

Padding

    Preenchimento interno da caixa

        padding-top, padding-right, padding-bottom, padding-left
        values <length> <percentagem> 

        Padding poderá causar diferença na largura de um elemento

Border (outline)

    As bordas da caixa

        value <border-style> <border-width> <border-color>
        style: solid, dotted, dashed, double, groove, ridge, inset, ouset
        width: <length>
        color: <color>

    E outline?

        difere em 4 sentidos:
            Não modifica o tamanho da caixa, pois não é parte do box model
            Poderá ser diferente de retangular
            Não permite ajuste individual
            Mais usado pelo super agent para acessibilidade    