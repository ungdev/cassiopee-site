<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/Components/Navbar.vue'
import Timer from '@/Components/Timer.vue'
import VerticalCard from '@/Components/VerticalCard.vue';
import TextAndImageLeft from '@/Components/TextAndImageLeft.vue';
import TextAndImageRight from '@/Components/TextAndImageRight.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <Timer />

    
    <div id="aprem">
      <br><br>
      <div style="width: 100%; display: flex; align-items: left;">
        <h1 style="color: aliceblue;">Qu'est ce que c'est Cassiopée ?</h1>
      </div>
      
      <br>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
      <br><br><br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">A propos de l'après-midi</h1>
      </div>
      <br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h2 style="color: aliceblue;">Lorem Ipsum</h2>
      </div>
      <TextAndImageRight></TextAndImageRight>
      <br>
      <div style="width: 100%; display: flex;">
        <h2 style="color: aliceblue; position: relative; left: 80%;">Lorem Ipsum</h2>
      </div>
      <br>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
           <br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h2 style="color: aliceblue;">Lorem Ipsum</h2>
      </div>
      <TextAndImageRight></TextAndImageRight>
      <br>
      <div style="width: 100%; display: flex;">
        <h2 style="color: aliceblue; position: relative; left: 80%;">Lorem Ipsum</h2>
      </div>
      <br>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
           <br><br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">A propos de l'après-midi</h1>
      </div>
      <br>
      <div id="flip">
        <VerticalCard></VerticalCard>
        <VerticalCard></VerticalCard>
        <VerticalCard></VerticalCard>
      </div>
      <div id="flip">
        <VerticalCard></VerticalCard>
        <VerticalCard></VerticalCard>
        <VerticalCard></VerticalCard>
      </div>
    </div>
    
    <div id="soirée">
      <br>
      <VerticalCard />
    </div>
  </body>
</template>

<style scoped>
  #flip{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  body {
    background-color: #f8f9fa;
  }
  #aprem {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    background-color: #4452ad;
  }
  #soirée {
    min-height: 100vh;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #252655;
  }
</style>