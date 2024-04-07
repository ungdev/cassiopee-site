<template>
    <div class="book">
        <transition-group name="page" tag="div" class="page-container">
            <div class="page" v-for="(page, index) in visiblePages" :key="index">
                <!-- Content for each page -->
                <div v-html="page.content"></div>
            </div>
        </transition-group>
        <div class="navigation">
            <button style="color: black; margin: 2px;" @click="turnPage('prev')" :disabled="currentPage === 0">Previous</button>
            <button style="color: black; margin: 2px;"@click="turnPage('next')" :disabled="currentPage === totalPages - 1">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                { title: 'Page 1', 
                content: '<div style="margin:10px"><h2>Diva Faune</h2><br><p>Pleins de belles choses sur eux la. Ils font pleins de musique de tous les genres nan je deconne plus du rock alternatif. Ils sont sympas en vrai de vrai hésitez pas à écouter le petit extrait en dessous vous savez</p><br><iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/39l75cUNbVMpHgykQLyOUT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 2', content: '<img src="src//assets//diva faune.jpeg" style="background: top no-repeat; background-size:cover;"/>' },
                { title: 'Page 3', 
                content: '<div style="margin:10px"><h2>Bekar</h2><br><p>Pleins de belles choses sur eux la. Ils font pleins de musique de tous les genres nan je deconne plus du rock alternatif. Ils sont sympas en vrai de vrai hésitez pas à écouter le petit extrait en dessous vous savez</p><br><iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6wjkiUBMMYSIx5UBTp7eKC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 4', content: '<img src="src//assets//diva faune.jpeg" style="background: top no-repeat; background-size:cover;"/>' },
                { title: 'Page 5', 
                content: '<div style="margin:10px"><h2>Chinwvr</h2><br><p>Pleins de belles choses sur eux la. Ils font pleins de musique de tous les genres nan je deconne plus du rock alternatif. Ils sont sympas en vrai de vrai hésitez pas à écouter le petit extrait en dessous vous savez</p><br><iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0FO41jGlT3izLX7oULFUlr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 6', content: '<img src="src//assets//diva faune.jpeg" style="background: top no-repeat; background-size:cover;"/>' },
                { title: 'Page 7', 
                content: '<div style="margin:10px"><h2>Arone</h2><br><p>Pleins de belles choses sur eux la. Ils font pleins de musique de tous les genres nan je deconne plus du rock alternatif. Ils sont sympas en vrai de vrai hésitez pas à écouter le petit extrait en dessous vous savez</p><br><iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4azuvIO6w5uQmthX95jfL8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>' },
                { title: 'Page 8', content: '<img src="src//assets//diva faune.jpeg" style="background: top no-repeat; background-size:cover;"/>' },
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
    justify-content: center;
    
}

.page-container {
    display: flex;
    justify-content: center;
}

.page {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    margin: 1px;
}



@media (min-width: 901px) {
    .page {
        width:400px;
        height:600px;
        
    }
}

@media (min-width: 601px) and (max-width: 900px) {
    iframe{
        display: none;
    }
    .page {
        width: 80%;
        height: 100%;
    }
}

@media (max-width: 600px) {
    iframe{
        display: none;
    }
    .page {
        width: 45%;
        height: 100%;
        min-height: 400px;
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
</style>