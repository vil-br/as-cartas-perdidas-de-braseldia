const generateQuote = function() {
    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Saudações meu rei, encaminho essa mensagem pois acredito que não acreditaria mas ok, essa noite voltando com meu cavalo para a vila, no meio da mata notei que havia algo estranho, quando olhei para a mata notei que havia uma pessoa com os olhos vermelhos, que correu na minha direção foi quando usei meu revolver e descarreguei ao seu peito sendo que não parou meu cavalo assustado me jogou no chão, o ser maligno me agarrou e mordeu meu braço, notei que esse ser cheirava muito mal e seu corpo estava em estado de decomposição, não sei qual é o tipo de mortandade, mas meu braço esta dormente... confesso que estou preocupado, com medo, receio de haver mais deles, será que me tornarei um deles?... estou preocupado.",
        author: "Uritte Gorangor"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "Sabe pensando bem, acho que tudo aquilo que voce disse faz...<br> (folha rasgada na metade com manchas de sangue quando foi encontrada)",
        author: "Autor Desconhecido"
    },
    {
        quote: "Oi tudo bem? como estão as coisas? Espero que por ai esteja tudo bem, a viagem é longa, espero voltar logo, mas estou bem, apenas com dor de dente, mas tudo vai ficar bem, até logo.",
        author: "Julius Wesley"
    },
    {
        quote: "Querida Josie, estou bem, como vocês estão?<br> A guerra está quase no fim, creio que dentro de alguns meses esterei de volta. Fique com Deus em breve estarei de volta. Beijos.",
        author: "Kingsley Shacklebolt"
    },
	
    {
        quote: "Saudações irmão, como estão todos? Fiquei sabendo que a doença que mataram os nossos irmãos foi plantada pelo reino do rei Graburtz, e o pior você não sabe, eles sabiam qual era o remedio, mas esse remedio estava contado apenas para eles. Isso não ficara impune, Deus sabe de todas as coisas, eles estão lutando contra Deus, isso é uma luta por poder Jezias, hoje estou preso, talvez viva mais alguns dias, não estou muito bem, se cuide meu irmão.",
        author: "Janezis Blanderus"
    },
	
    {
        quote: "O mundo muitas vezes nos faz bem e as vezes não.<br> Mas não tenho motivo para ser ingrato, minha vida foi boa, talvez errei bastante, até mais do que deveria. Por mais que o mundo pareça perdido,<br> eu tenho esperanças, não por que sou bom, ou tenho força, mas conheci um profeta viajante na vila, ele me falou sobre um rei distante, que salva as pessoas, eu fiquei surpreso quando soube sabe, nesse dia eu nao tinha mais motivo pra viver, mas então ouvi esse homem chorando, e dizendo que morreu por mim... para poder salvar minha vida...<br> na hora meu coração frio se aqueceu.",
        author: "Jeremias Sinvozios"
    },
    {
        quote: "Saudações senhor Alfredo como estãos os seus? Espero que bem,<br> estou atraves desta avisando que sua conta na tenda esta alta e não poderá mais comprar nada antes que pague o que deve, sinto muito mas quem me vende agora só aceita dinheiro pago na hora, obrigado, fique bem.",
        author: "Tinna Comberlaga"
    },
    {
        quote: "Fique por ai, estou indo nos proximos dias, quase fui pego, mas consegui me esconder a tempo, mas os guardas estao me procurando, foi facil, tive que eliminar algumas pessoas mas agora somos ricos, haha, vamos ter paz para viver tranquilos para sempre, espero te ver logo Sendaria, beijos.",
        author: "Dovbbar Glassiba"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}