<template>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li
                data-target="#slideshow"
                v-for="(slide, index) in slides"
                :key="index"
                :data-slide-to="index"
                :class="{ active: index === 0 }"
            ></li>
        </ol>
        
      
        
        <div class="carousel-inner">
            <div class="carousel-content">
            <div
                class="carousel-item"
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: index === 0 }"
            >
                <img :src="slide.image" class="d-block" :alt="slide.caption" />
                <!--<div class="carousel-caption " >
                <h5 >{{ slide.captionTitre }}</h5>
                <p > {{ slide.captionTxt }}</p>
                </div>-->
                
               
            </div>
            </div>
        </div>
        
        <a class="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#slideshow" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script setup>
const slides = [
    {
        image: "/part/fruitz-1.webp",
        captionTitre: "Fruitz",
        captionTxt: "Fruitz"
    },
    {
        image: "/part/igraal.jpeg",
        captionTitre: "Igraal",
        captionTxt: "Igraal"
    },
    {
        image: "/part/Logo affiche/Provexi.png",
        captionTitre: "Provexi",
        captionTxt: "Provexi"
    },
    {
        image: "/part/Logo affiche/UTT_couleur.png",
        captionTitre: "UTT",
        captionTxt: "UTT"
        },
    {
        image: "/part/Logo affiche/Distributeur de boissons pour les professionnels.png",
        captionTitre: "Charreau",
        captionTxt: "Charreau"
    }
];

</script>

<style>

#slideshow {
    margin: 20px;
    width: 500px; /* Ajustez selon vos besoins */
    height: 300px; 
}

.carousel-inner {
   
    width: 100%;
    height: 100%;
}
.carousel-caption {
    position: absolute;
    bottom: 0;
    color: black;
}
.carousel-indicators {
    bottom: -60px;
}
.carousel-control-prev {
    left: -100px;
}
.carousel-control-next {
    right: -100px;
}
.carousel-content {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 100%;
    transition: none; 

}
.carousel-item {
    width: 100%;
    height: 100%;
    margin: auto;
}
.carousel-item img {
    margin: auto;
    object-fit: contain; /* Ajuste l'image à la taille du conteneur tout en conservant son rapport d'aspect */
    width: 100%;
    height: 100%;
    max-width: 450px; /* Ajustez selon vos besoins */
    max-height: 250px; 
}
@media (max-width: 500px){
    #slideshow {
        width: 200px;
        height: 100px;
    }
    .carousel-control-prev {
    left: -60px;

    }
    .carousel-control-next {
    right: -60px;
    }
    .carousel-item img{
        max-width: 200px;
        max-height: 100px;
    }
    .carousel-content {
        top: 5%;
    }

    
}
</style>