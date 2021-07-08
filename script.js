// scroll sur la bonne section de page au clic ou au press enter sur les liens

$(function () {

    $(".navbar a, footer a").on("click keypress", function (event) {

        event.preventDefault();
        let hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top}, 900, function () {
            window.location.hash = hash;
        })

    });

})


// section éducation, openclassrooms : affichage des compétences correspondantes au clic sur la flèche d'un projet

let resolution;
let arrowSkills;

let getResolution = () => {
    resolution = window.screen.width;
}

$(function () {
    $(".arrow-skills, .arrow-skills-medium-screen").on("click keypress", function (event) {
        event.preventDefault();
        getResolution();
        if (resolution < 768) {
            arrowSkills = $(".arrow-skills");
        } else if (resolution >= 768) {
            arrowSkills = $(".arrow-skills-medium-screen");
        }
        if (arrowSkills.index(this) === 0) {
            $(".skills-projectOne, .skills-icon-one").slideToggle();
        } else if (arrowSkills.index(this) === 1) {
            $(".skills-projectTwo, .skills-icon-two").slideToggle();
        } else if (arrowSkills.index(this) === 2) {
            $(".skills-projectThree, .skills-icon-three").slideToggle();
        } else if (arrowSkills.index(this) === 3) {
            $(".skills-projectFour, .skills-icon-four").slideToggle();
        } else {
            $(".skills-projectFive, .skills-icon-five").slideToggle();
        }
    })
})


// carousel défauts-qualités

let topGood = document.querySelector(".top-good");
let topNoGood = document.querySelector(".top-no-good");

let topGoodItems = ["Je suis persévérante : si problème il y a, solution je cherche.", "Je sais m'appuyer sur une équipe : si solution je ne trouve pas, aide je demande.", "Je suis une bonne partenaire de travail : communicante, sociable, bienveillante.", "(En réalité j'achète\n" +
"mes collègues avec des pâtisseries. C'est pas joli, joli, mais ça marche.)", "Je sais aussi travailler seule, en parfaite autonomie. Pas besoin d'être derrière moi pour me\n" +
"motiver.", "J'adore apprendre. Un nouveau langage ? Une nouvelle techno ? Je m'y attelle avec bonheur.", "Je suis ouverte aux critiques constructives. Tout ce qui peut m'aider à progresser est bienvenu.", "J'ai de bonnes capacités rédactionnelles et si je peux les mettre à profit pour x raison, je le ferai\n" +
"toujours avec plaisir.", "J'ai une vraie conscience professionnelle. Le travail bien fait, c'est vraiment ma ligne de conduite."];

let topNoGoodItems = ["J'ai du mal à évaluer ce que je sais faire : \"Tu te mets combien en HTML ? - Euh... 10 ? C'est bien 10 ? - Sur combien ? - Je sais pas, ça va jusqu'à combien le HTML ?\" ...", "Découle du 1 : j'ai assez peu confiance en mes capacités.",
    "Je ne suis pas une super geek.", "(Ce qui veut dire que je n'ai vu aucun Star Wars. Pire encore : aucun épisode de Game of Thrones. Shame !)",
    "\"Write less, code more\" : un doux rêve. Pour l'instant, on est plutôt sur du : \"Write a lot, write too much\".", "Je n'ai jamais fait de tests. Mais je suis impatiente de m'y confronter.", "Je n'ai pas d'expérience. Mais quand vous m'aurez recrutée, après j'en aurai. C'est donc un faux\n" +
    "problème.", "Je suis plutôt stressée : à l'approche d'un entretien, ma vie ne tient plus qu'en deux mots : Euphytose et méditation.", "Je suis la pénible qui oublie régulièrement son badge ou ses clés pour rentrer dans l'entreprise.\n" +
    "Je suis celle qui vient travailler alors que c'est férié, ou qui embauche avec une heure de retard parce\n" + "qu'elle ne pensait plus au changement d'heure. Bref : je suis étourdie. Mais j'y travaille à grands coups d'agendas, d'alarmes et de\n" +
    "Trello."]


let showTopGood = () => {

    let carousel = document.createElement("div");
    carousel.classList.add("carousel", "slide", "text-center", "row");
    carousel.setAttribute("id", "myGoodCarousel");
    carousel.setAttribute("data-interval", "false");
    topGood.appendChild(carousel);

    let carouselContent = document.createElement("div");
    carouselContent.classList.add("carousel-inner");
    carouselContent.setAttribute("role", "listbox");
    carousel.appendChild(carouselContent);

    let carouselIndicators = document.createElement("ol");
    carouselIndicators.classList.add("carousel-indicators", "align-items-center");
    carousel.appendChild(carouselIndicators);

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
    }

    let carouselControlPrev = document.createElement("a");
    carouselControlPrev.classList.add("carousel-control-prev", "justify-content-start");
    carouselControlPrev.setAttribute("href", "#myGoodCarousel");
    carouselControlPrev.setAttribute("role", "button");
    carouselControlPrev.setAttribute("data-slide", "prev");
    carouselContent.appendChild(carouselControlPrev);

    let carouselControlPrevIcon = document.createElement("span");
    carouselControlPrevIcon.classList.add("carousel-control-prev-icon");
    carouselControlPrevIcon.setAttribute("aria-hidden", "true");
    carouselControlPrev.appendChild(carouselControlPrevIcon);

    let carouselControlPrevScreenReaders = document.createElement("span");
    carouselControlPrevScreenReaders.classList.add("sr-only");
    carouselControlPrevScreenReaders.textContent = "Previous";
    carouselControlPrev.appendChild(carouselControlPrevScreenReaders);

    let carouselControlNext = document.createElement("a");
    carouselControlNext.classList.add("carousel-control-next", "justify-content-end");
    carouselControlNext.setAttribute("href", "#myGoodCarousel");
    carouselControlNext.setAttribute("role", "button");
    carouselControlNext.setAttribute("data-slide", "next");
    carouselContent.appendChild(carouselControlNext);

    let carouselControlNextIcon = document.createElement("span");
    carouselControlNextIcon.classList.add("carousel-control-next-icon");
    carouselControlNextIcon.setAttribute("aria-hidden", "true");
    carouselControlNext.appendChild(carouselControlNextIcon);

    let carouselControlNextScreenReaders = document.createElement("span");
    carouselControlNextScreenReaders.classList.add("sr-only");
    carouselControlNextScreenReaders.textContent = "Next";
    carouselControlNext.appendChild(carouselControlNextScreenReaders);
}
showTopGood();

let showTopNoGood = () => {

    let carousel = document.createElement("div");
    carousel.classList.add("carousel", "slide", "text-center");
    carousel.setAttribute("id", "myNogoodCarousel");
    carousel.setAttribute("data-interval", "false");
    topNoGood.appendChild(carousel);

    let carouselContent = document.createElement("div");
    carouselContent.classList.add("carousel-inner");
    carouselContent.setAttribute("role", "listbox");
    carousel.appendChild(carouselContent);

    let carouselIndicators = document.createElement("ol");
    carouselIndicators.classList.add("carousel-indicators", "align-items-center");
    carousel.appendChild(carouselIndicators);

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
    }
    let carouselControlPrev = document.createElement("a");
    carouselControlPrev.classList.add("carousel-control-prev", "justify-content-start");
    carouselControlPrev.setAttribute("href", "#myNogoodCarousel");
    carouselControlPrev.setAttribute("role", "button");
    carouselControlPrev.setAttribute("data-slide", "prev");
    carouselContent.appendChild(carouselControlPrev);

    let carouselControlPrevIcon = document.createElement("span");
    carouselControlPrevIcon.classList.add("carousel-control-prev-icon");
    carouselControlPrevIcon.setAttribute("aria-hidden", "true");
    carouselControlPrev.appendChild(carouselControlPrevIcon);

    let carouselControlPrevScreenReaders = document.createElement("span");
    carouselControlPrevScreenReaders.classList.add("sr-only");
    carouselControlPrevScreenReaders.textContent = "Previous";
    carouselControlPrev.appendChild(carouselControlPrevScreenReaders);

    let carouselControlNext = document.createElement("a");
    carouselControlNext.classList.add("carousel-control-next", "justify-content-end");
    carouselControlNext.setAttribute("href", "#myNogoodCarousel");
    carouselControlNext.setAttribute("role", "button");
    carouselControlNext.setAttribute("data-slide", "next");
    carouselContent.appendChild(carouselControlNext);

    let carouselControlNextIcon = document.createElement("span");
    carouselControlNextIcon.classList.add("carousel-control-next-icon");
    carouselControlNextIcon.setAttribute("aria-hidden", "true");
    carouselControlNext.appendChild(carouselControlNextIcon);

    let carouselControlNextScreenReaders = document.createElement("span");
    carouselControlNextScreenReaders.classList.add("sr-only");
    carouselControlNextScreenReaders.textContent = "Next";
    carouselControlNext.appendChild(carouselControlNextScreenReaders);
}
showTopNoGood();

