<script setup>
import { defineProps } from 'vue'
    defineProps({
        msg: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: "src//assets//graphisme//Avion rouge.png"
        }
    })
</script>

<template>
    <div class="container">
        <div class="textArea">
        <div class="text-container">
            <p style="color: aliceblue;">{{ msg }}</p>
        </div>
        <div class="image-container">
            <img :src="image" width="200px" alt="Image" />
        </div>
    </div>
    </div>
    
</template>

<style scoped>
*{
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.textArea {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 10px;
}
.image-container {
    float: right;
    max-width: 40%;
}

.text-container {
    float: left;
    min-width : 60%;
    text-align: justify;
}
@media (max-width: 500px) {    
    .textArea {
        flex-direction: column;
        align-items: center;
    }
    .image-container {
        float: none;
        max-width: 100%;
        margin-top: 10px;
    }
    
    .text-container {
        float: none;
        min-width: 100%;
    }
}
</style>
    