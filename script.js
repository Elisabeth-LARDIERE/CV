$(function () {

    $(".navbar a, footer a,  .tops-link ").on("click", function (event) {

        event.preventDefault();
        let hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top}, 900, function () {
            window.location.hash = hash;
        })

    });

})

let arrowSkills = Array.from(document.querySelectorAll(".arrow-skills"));
console.log(arrowSkills);

for (let i of arrowSkills) {
    $(i).click(function () {
        if (arrowSkills.indexOf(i) === 0) {
            $(".skills-projectOne, .skills-icon-one").slideToggle();
        } else if (arrowSkills.indexOf(i) === 1) {
            $(".skills-projectTwo, .skills-icon-two").slideToggle();
        } else if (arrowSkills.indexOf(i) === 2) {
            $(".skills-projectThree, .skills-icon-three").slideToggle();
        } else if (arrowSkills.indexOf(i) === 3) {
            $(".skills-projectFour, .skills-icon-four").slideToggle();
        } else {
            $(".skills-projectFive, .skills-icon-five").slideToggle();
        }
    })
}

/*$(".arrow-skills").click(function(){
    $(".skills").slideToggle();
});*/

/*let showSkills = () => {
    let educationContainer = document.querySelector(".education-container");
    let skillBlock = document.createElement("div");
    skillBlock.classList.add("col-md-4", "skills-block");
    educationContainer.appendChild(skillBlock);
}

let arrowLinks = Array.from(document.querySelectorAll(".fa-external-link-alt"));
for (let arrowLink of arrowLinks) {
    arrowLink.onclick = function () {
        showSkills();
    }
}*/


// Mélange des compétences (algorithme de Fisher-Yates)

/*let skills = ["HTML5", "CSS3", "Javascript", "React", "Bootstrap", "Adobe XD", "Git", "Github", "SEO", "Express", "Node.js", "MongoDB", "MySQL", "Apiary", "Responsive", "Accessibilité", "Sécurité", "Anglais"];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // boucle sur le tableau en ordre inverse
        let j = Math.floor(Math.random() * (i + 1)); // random index entre 0 et i
        [array[i], array[j]] = [array[j], array[i]]; // swap des éléments entre eux (destructuration)
    }
}
shuffle(skills);*/


/*let skillsContainer = document.querySelector(".skills-container");

skills.forEach((i, k) => {
    console.log(i);
    let skillBlock = document.createElement("div");
    skillBlock.classList.add("skill-block");
    skillsContainer.appendChild(skillBlock);

    let skillContent = document.createElement("p");
    skillContent.classList.add("skill-content");
    skillContent.textContent = i;
    skillBlock.appendChild(skillContent);


    skillContent.style.animationDelay = (k * 1) + "s";
})*/

// CAROUSEL DEFAUTS - QUALITES

let topGoodArrow = document.querySelector(".top-good-arrow");
let topNoGoodArrow = document.querySelector(".top-no-good-arrow");
let topGood = document.querySelector(".top-good");
let topNoGood = document.querySelector(".top-no-good");

let topGoodItems = ["Je suis persévérante : si problème il y a, solution je cherche.", "Je sais m'appuyer sur une équipe : si solution je ne trouve pas, aide je demande.", "Je suis une bonne partenaire de travail : communicante, sociable, bienveillante.", "(En réalité j'achète\n" +
"mes collègues avec des pâtisseries. C'est pas joli, joli, mais ça marche.)", "Je sais aussi travailler seule, en parfaite autonomie. Pas besoin d'être derrière moi pour me\n" +
"motiver.", "J'adore apprendre. Un nouveau langage ? Une nouvelle techno ? Je mets les mains dans le cambouis avec\n" +
"bonheur.", "Je suis ouverte aux critiques constructives. Tout ce qui peut m'aider à progresser est bienvenu.", "J'ai de bonnes capacités rédactionnelles et si je peux les mettre à profit pour x raison, je le ferai\n" +
"toujours avec plaisir.", "J'ai une vraie conscience professionnelle. Le travail bien fait, c'est vraiment ma ligne de conduite."];

let topNoGoodItems = ["J'ai du mal à évaluer ce que je sais faire : \"Tu te mets combien en HTML ? - Euh... 10 ? C'est bien 10 ? - Sur combien ? - Je sais pas, ça va jusqu'à combien le HTML ?\" ...", "Découle du 1 : j'ai assez peu confiance en mes capacités.",
    "Je ne suis pas une super geek.", "(Ce qui veut dire que je n'ai vu aucun Star Wars. Pire encore : aucun épisode de Game of Thrones. Shame on me.)",
    "\"Write less, code more\" : un doux rêve. Pour l'instant, on est plutôt sur du : \"Write a lot, write too much\".", "Je n'ai jamais fait de tests. Mais je suis impatiente de m'y confronter.", "Je n'ai pas d'expérience. Mais quand vous m'aurez recrutée, après j'en aurai. C'est donc un faux\n" +
    "problème.", "Je suis plutôt stressée : à l'approche d'un entretien, ma vie ne tient plus qu'en deux mots : Euphytose et méditation.", "S'il faut un badge pour rentrer dans l'entreprise, je vais l'oublier. Souvent.  \n" +
    "Je suis déjà allée travailler un jour férié. J'ai déjà embauché avec une heure de retard parce\n" + "que\n" + "j'avais oublié le changement d'heure. Bref : je peux parfois être étourdie. Mais j'y travaille à grands coups d'agendas, d'alarmes et de\n" +
    "Trello."]


let showTopGood = () => {
    /*topGoodArrow.onclick = function () {*/

        let carousel = document.createElement("div");
        carousel.classList.add("carousel", "slide", "text-center");
        carousel.setAttribute("id", "myGoodCarousel");
        carousel.setAttribute("data-ride", "carousel");
        topGood.appendChild(carousel);
        console.log(carousel);

        let carouselIndicators = document.createElement("ol");
        carouselIndicators.classList.add("carousel-indicators");
        carousel.appendChild(carouselIndicators);

        let carouselContent = document.createElement("div");
        carouselContent.classList.add("carousel-inner");
        carouselContent.setAttribute("role", "listbox");
        carousel.appendChild(carouselContent);

        for (let i of topGoodItems) {
            let index = topGoodItems.indexOf(i);

            let targetIndicator = document.createElement("li");
            targetIndicator.setAttribute("data-target", "#myGoodCarousel");
            targetIndicator.setAttribute("data-slide-to", index.toString());
            carouselIndicators.appendChild(targetIndicator);

            let item = document.createElement("div");
            item.classList.add("carousel-item");
            carouselContent.appendChild(item);

            if (index === 0) {
                item.classList.add("active");
                targetIndicator.classList.add("active");
            }

            let itemText = document.createElement("p");
            itemText.textContent = i;
            item.appendChild(itemText);
            console.log(itemText.textContent);
        }
    //}
}
showTopGood();

let showTopNoGood = () => {
    /*topNoGoodArrow.onclick = function () {*/

        let carousel = document.createElement("div");
        carousel.classList.add("carousel", "slide", "text-center");
        carousel.setAttribute("id", "myNogoodCarousel");
        carousel.setAttribute("data-ride", "carousel");
        topNoGood.appendChild(carousel);
        console.log(carousel);

        let carouselIndicators = document.createElement("ol");
        carouselIndicators.classList.add("carousel-indicators");
        carousel.appendChild(carouselIndicators);

        let carouselContent = document.createElement("div");
        carouselContent.classList.add("carousel-inner");
        carouselContent.setAttribute("role", "listbox");
        carousel.appendChild(carouselContent);

        for (let i of topNoGoodItems) {
            let index = topNoGoodItems.indexOf(i);

            let targetIndicator = document.createElement("li");
            targetIndicator.setAttribute("data-target", "#myNogoodCarousel");
            targetIndicator.setAttribute("data-slide-to", index.toString());
            carouselIndicators.appendChild(targetIndicator);

            let item = document.createElement("div");
            item.classList.add("carousel-item");
            carouselContent.appendChild(item);

            if (index === 0) {
                item.classList.add("active");
                targetIndicator.classList.add("active");
            }

            let itemText = document.createElement("p");
            itemText.textContent = i;
            item.appendChild(itemText);
            console.log(itemText.textContent);
        }
    //}
}
showTopNoGood();



