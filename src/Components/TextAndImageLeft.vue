<script setup>
    defineProps({
        msg: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
            default: "../assets/Logo.png"
        }
    })
</script>

<template>
    <div>
        <div class="textArea">
        <div class="image-container">
            <img src="image" width="200px" alt="Image" />
        </div>
        <div class="text-container">
            <p style="color: aliceblue;">{{ msg }}</p>
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
    float: left;
    max-width: 40%;
}

.text-container {
    float: left;
    min-width: 60%;
    
}
@media (max-width: 500px) {    
    .textArea {
        flex-direction: column;
        align-items: center;
    }
    .image-container {
        display: none;
    }
    
    .text-container {
        float: none;
        min-width: 100%;
    }
}
</style>
    