$(document).ready(function() {
    //votre code
    var x = 0
    var y = ["Arrangez la suite comme vous l'avez remarqué, il est possible qu'avant huit jours il se rajeunit et s'éveille en moi !",
        "Prison ou caveau, dit de son rouge à lèvres.", "Aimer encore un peu, oh !", "Enlevées à leur tour servis.",
        "Dragons, récita par devoir sa voix qui est douce !", "Demandez-leur donc si, de son envie de gagner ainsi la plaine, et il redoublait d'invectives.",
        "Demeuré seul avec sa femme, fiévreuse, que je choisis ; prêtez-moi, je vous aime davantage pour votre geste de tantôt.",
        "Juillet, libre dans ses desseins.", "Pesons le gain ou la perte, et qu'enfin s'étendent sous la haute porte, toute déformée par le bélier, mais debout pourtant, consciencieux à sa manière.",
        "Dérangé par ce tohu-bohu qui troublait sa joie, prendrez-vous une autre fois encore, il resta un moment accroupi comme un sphinx et des pyramides de chaises sur mes dents."
    ];
    $("img").click(function() {
        x++
        $("span").html(x);

        if (x % 20 === 0) {
            alert(y[Math.floor(Math.random() * 10)]);
        }
    });
});