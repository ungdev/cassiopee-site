<script setup>

</script>

<template>
    <div class="textContainer">
        <div class="textArea">
        <div class="text-container">
            <p style="color: aliceblue;">Une palpation est organisée à l’entrée du site de Cassiopée.
Il est interdit de se présenter en possession d’armes (y compris les armes d’autodéfense), d’objets explosifs ou inflammables, de spray anti-agression, déodorants ou aérosols, d’objets tranchants ou contondants, d’outils et objets métalliques, d’objets encombrants (casque de moto, antivols...), des récipients (pleins ou vides), de la nourriture ou des boissons, drogue et stupéfiants.</p>
        </div>
        <div class="image-container">
            <img src="../assets/graphisme/Avion rouge.png" width="200px" alt="Image" />
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
    float: right;
    max-width: 40%;
}

.text-container {
    float: left;
    min-width : 60%;
}
</style>
    