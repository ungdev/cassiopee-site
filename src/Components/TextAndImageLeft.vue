<script setup>
    defineProps({
        msg: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div>
        <div class="textArea">
        <div class="image-container">
            <img src="../assets/graphisme/mouton de dos.png" width="200px" alt="Image" />
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
    height:  10vh;
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
</style>
    