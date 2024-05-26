<template>
    <div class="book">
        <transition-group name="page" tag="div" class="page-container">
            <div class="page" v-for="(page, index) in visiblePages" :key="index">
                <!-- Content for each page -->
                <div v-html="page.content"></div>
            </div>
        </transition-group>
        <div class="navigation">
            <button style="color: black; margin: 2px;" @click="turnPage('prev')" :disabled="currentPage === 0">Précédent</button>
            <button style="color: black; margin: 2px;"@click="turnPage('next')" :disabled="currentPage === totalPages - 1">Suivant</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                { title: 'Page 1', 
                content: '<div class="left" style=" margin-left:20px"><h2 style="color: black;">Diva Faune</h2><p>	Diva Faune est un groupe d’électro-pop français, fondé en 2013 par deux amis, dont un diplômé de lUTT. C’est avec le titre “Shine on my way” que le groupe se fait connaître du grand public et leur EP “Get up” est certifié disque de platine.  </p><iframe class="spotify" style="border-radius:12px" src="https://open.spotify.com/embed/artist/39l75cUNbVMpHgykQLyOUT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 2', content: '<img class="right" src="/artiste/diva faune.png" style="background: top no-repeat; background-size:cover;"/>' },
                { title: 'Page 3', 
                content: '<div class="left" style=" margin-left:20px"><h2 style="color: black;">Bekar</h2><p>Après avoir évolué au sein d’un groupe, il a entamé une carrière solo marquée par la sortie de son premier projet, « Boréal ». Il sort ensuite sa mixtape « Briques rouges », dans laquelle Bekar se présente musicalement.</p><iframe class="spotify" style="border-radius:12px" src="https://open.spotify.com/embed/artist/6wjkiUBMMYSIx5UBTp7eKC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 4', content: '<div class="right"><img src="artiste/bekar.jpeg" style="background: top no-repeat; background-size:cover;"/></div>' },
                { title: 'Page 5', 
                content: '<div class="left" style=" margin-left:20px"><h2 style="color: black;">Chinwvr</h2><p>Un ciel dégagé, un coucher de soleil jaune orangé et un bon jus d\'ananas bien frais: Chinwvr n\'attendra pas l\'été pour vous amener dans son univers estivale.</p><iframe class="spotify" style="border-radius:12px" src="https://open.spotify.com/embed/artist/0FO41jGlT3izLX7oULFUlr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 6', content: '<div class="right"><img src="artiste/chinwvr.png" style="background: top no-repeat; background-size:cover;"/></div>' },
                { title: 'Page 7', 
                content: '<div class="left" style=" margin-left:20px"><h2 style="color: black;">Arone</h2><p>Arøne fait partie de « la next gen », cette génération d’artistes ayant grandi en écoutant majoritairement du rap, de la pop ou encore de l’électro. Elle propose aujourd’hui une musique touchante et rythmée. </p><iframe class="spotify" style="border-radius:12px" src="https://open.spotify.com/embed/artist/4azuvIO6w5uQmthX95jfL8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 8', content: '<div class="right"><img src="artiste/arone.png" style="background: top no-repeat; background-size:cover ;"/></div>' },
                // Add more pages as needed
            ],
            currentPage: 0,
            pageSize: 2,
        };
    },
    computed: {
        visiblePages() {
            const start = this.currentPage * this.pageSize;
            const end = start + this.pageSize;
            return this.pages.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.pages.length / this.pageSize);
        },
    },
    methods: {
        turnPage(direction) {
            if (direction === 'prev' && this.currentPage > 0) {
                this.currentPage--;
            } else if (direction === 'next' && this.currentPage < this.totalPages - 1) {
                this.currentPage++;
            }
        },
    },
};
</script>

<style>
.book {
    display: flex;
    flex-direction: column;
    background-image: url("/artiste/book.png");
    background-position: center;
    background-size: cover;
    margin: 0 auto;
    width: 1200px;
    height: 750px;
    border-radius: 10px;
    h2{
        font-family: tan meringue;
    }
    
}

.page-container {
    display: flex;
    gap: 30px;
    justify-content: center;

}

.page {
    display: flex;
    
    background-color: none;

    width:400px;
    height:550px;
    border-radius: 10px;
    overflow: hidden;
    img{
        height: 550px;
        background-position: center;
    }

  


}
.right{
    justify-content: center;

}

@media (min-width:900px ){
    .book{
        justify-content: center;
    }
    .left{
        margin-top: 15px;
    }
}

@media (max-width: 900px) {
    .book {
        width: 360px;
        height: 550px;
        background-image: url("/artiste/parchemin.png") ;
        padding-top: 10px;

        h2{
            margin-top: 15px;
            margin-left: 35px;
        }
        p{
            margin: 10px;
            padding: 15px;
        }
    }
    .navigation {
        bottom: 30px;
        flex-direction: row;
    }
    .spotify{
        height: 100px;
    }
    .page-container {
        flex-direction: column;
    }
    .page {
        padding-top: 10px;
        width: 90%;
        height: auto;

    }
    .left{
            margin-left: 0px;
            display: flex;
            flex-direction: column;
        }
    .right{
        display: none;
    }
    .navigation {
        flex-direction: column;

    }

}
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
}

.navigation {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
}
.navigation button {
    color: #333;
    background-color: #f4f4f44c;
    border: none;
    padding: 10px 20px;
    margin: 2px;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.navigation button:hover {
    background-color: #e9e9e9;
}

.navigation button:disabled {
    color: #aaa;
    background-color: #f4f4f43d;
}

</style>