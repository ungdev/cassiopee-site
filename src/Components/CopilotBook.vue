
<template>
    <div class="book">
        <transition-group name="page" tag="div" class="page-container">
            <div class="page" v-for="(page, index) in visiblePages" :key="index">
                <!-- Content for each page -->
                <h2>{{ page.title }}</h2>
                <div v-html="page.content"></div>
            </div>
        </transition-group>
        <button @click="turnPage('prev')">Previous</button>
        <button @click="turnPage('next')">Next</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                { title: 'Page 1', content: '<p>Content for page 1</p>' },
                { title: 'Page 2', content: '<a href="https://google.fr">google</a>' },
                { title: 'Page 3', content: 'Content for page 3' },
                { title: 'Page 4', content: 'Content for page 4' },
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
    },
    methods: {
        turnPage(direction) {
            if (direction === 'prev' && this.currentPage > 0) {
                this.currentPage--;
            } else if (direction === 'next' && this.currentPage < this.pages.length / this.pageSize - 1) {
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
    align-items: center;
}

.page-container {
    display: flex;
    justify-content: center;
}

.page {
    background-color: aliceblue;
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 1px;
}

.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>