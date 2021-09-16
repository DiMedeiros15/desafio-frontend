/// Banner

const bannerImage = async () => {
    let url = "https://labs.inforcedata.com.br/desafio-frontend/banners.json";
    let bannerFetch = await fetch(url);
    let responseCloud = await bannerFetch.json();

    responseCloud.map((cloud) => {
        let img = ` 
            <div class="mySlides fade">
                <div class="text">${cloud.titulo}</div>
                <img src="${cloud.imagem}">                
            </div>                                                
        `
        document.querySelector(".slideshow-container").insertAdjacentHTML("beforeend", img)
    });

}

// Vitrini
const vitrine = async () => {
    let url = "https://labs.inforcedata.com.br/desafio-frontend/vitrines.json";
    let vitriniFetch = await fetch(url);
    let responseCloud = await vitriniFetch.json();

    responseCloud.map((cloud) => {
        let vit = `
        
        <div class="card pm">
            <div class="icon">
                <img src="${cloud.capa}" alt="">
            </div>
            <div class="box">
                <h2>
                    <a href="#">${cloud.tipo}</a>
                </h2>
                <p>${cloud.bairro}</p>
                <P>${cloud.metragem}s</P>
                <ul class="icons">
                    <div>
                        <li  class="slide"><i class="fas fa-bed ico"></i></li>
                        <span>${cloud.quartos}</span>
                    </div>
                    <div>
                        <li><i class="fas fa-car ico"></i></li>
                        <span>${cloud.vagas}</span>
                    </div>
                    <div>
                        <li><i class="fas fa-bath ico"></i></li>
                        <span>${cloud.banheiros}</span>
                    </div>
                </ul>
                <button class="btn-vitrini">Leia Mais</button>
            </div>
        </div>
        `
        document.querySelector(".container-vitrine").insertAdjacentHTML("beforeend", vit)
    });

    console.log(responseCloud)

}

//  tag
const cloudTags = async () => {
    let url = "https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json";
    let cloudFetch = await fetch(url);
    let responseCloud = await cloudFetch.json();

    responseCloud.map((cloud) => {
        let tag = `
            <li><a href="#">${cloud.tag}</a></li>
        `
        document.querySelector(".posicao-tags").insertAdjacentHTML("beforeend", tag)
    })
}


const init = () => {
    bannerImage();
    vitrine();
    cloudTags();
}

// slide vitrine 
document.addEventListener("load", init());


const changeSlide = (event) => {

    document.querySelectorAll(".slide-controller").forEach(item => item.removeAttribute("data-active"));
    
    if(event.target.nextElementSibling != null) {
        document.querySelector(".container-vitrine").classList.remove("active-slide");
    } else {
        document.querySelector(".container-vitrine").classList.add("active-slide");
        event.target.setAttribute("data-active", true);
    }

}

document.querySelectorAll(".slide-controller").forEach((item) => {
    item.addEventListener("click", changeSlide);
})
