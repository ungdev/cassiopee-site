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
            <div
                class="carousel-item"
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: index === 0 }"
            >
                <img :src="slide.image" class="d-block w-100" :alt="slide.caption" />
               
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
        image: "src/assets/part/fruitz-1.webp",
        caption: "Fruitz",
    },
    {
        image: "src/assets/part/igraal.jpeg",
        caption: "Igraal",
    },
    {
        image: "src/assets/part/Logo affiche/Provexi.png",
        caption: "Provexi",
    },
];
</script>

<style>
#slideshow {
    margin: 20px;
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
.carousel-item img {
    object-fit: cover;
    width: auto;
    max-height: 250px;
    max-width: 400px;
}
</style>