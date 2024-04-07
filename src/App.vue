<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './Components/Navbar.vue'
import Timer from './Components/Timer.vue'
import VerticalCard from './Components/VerticalCard.vue';
import TextAndImageLeft from './Components/TextAndImageLeft.vue';
import TextAndImageRight from './Components/TextAndImageRight.vue';
import Book from './Components/Book.vue';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <Timer />

    
    <div id="aprem">
        <div style="width: 100%; display: flex; align-items: left;">
        <h1 class="title">Qu'est ce que c'est Cassiopée ?</h1>
      </div>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"
           image="./assets/graphisme/Etoile.png"></TextAndImageLeft>

      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue; margin-left: 5%">A propos de l'après-midi</h1>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Lorem Ipsum</h2>
        </div>
        <TextAndImageRight></TextAndImageRight>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex;">
        <h2 class="right-title">Lorem Ipsum</h2>
      </div>
        <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
        par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Lorem Ipsum</h2>
        </div>
        <TextAndImageRight></TextAndImageRight>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex;">
        <h2 class="right-title">Lorem Ipsum</h2>
      </div>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
      </div>
      
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue; margin-left: 5%">Stands</h1>
      </div>
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
    <div id="grad">
    </div>

    <div id="soirée">
      <div style="width: 100%; display: flex; align-items: left;">
        <h1 class="title">Localisation</h1>
      </div>
      <div style="width: 100%; display: flex; align-items: left;">
        <h1 class="title">Artistes</h1>
      </div>
      <div>
        <Book/>
      </div>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">A propos de la soirée</h1>
      </div>
      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Lorem Ipsum</h2>
        </div>
        <TextAndImageRight></TextAndImageRight>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex;">
        <h2 style="color: aliceblue; position: relative; left: 80%;">Lorem Ipsum</h2>
      </div>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
      </div>
      
      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Lorem Ipsum</h2>
        </div>
        <TextAndImageRight></TextAndImageRight>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex;">
        <h2 style="color: aliceblue; position: relative; left: 80%;">Lorem Ipsum</h2>
      </div>
      <TextAndImageLeft msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageLeft>
      </div>
      
    
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">Informations</h1>
      </div>
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
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">Sponsors</h1>
      </div>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">Equipe Cassiopée</h1>
      </div>
      <div id="trombi">
        <img src="@\assets\petit-prince.jpg"  alt="Image" />
      </div>
    </div>
    
    <div id="soiree">
      <br>
      <VerticalCard />
    </div>
  </body>
</template>

<style scoped>
.title{
  color: aliceblue;
  margin-left: 5%;
}
.text-container {
    padding: 10px;
    width: 70%;
  }
  .right-title {
    color: aliceblue;
    position: relative;
    left: 80%;
  }
  #trombi {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:90%;
    
  }
  #trombi img{
    width: 50%;
    height: 50%;
    margin: 10px;
  }
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
  #grad {
  background-image: linear-gradient(#4452ad, #252655);
  min-height: 15vh;
  }
  #soirée {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    
    background-color: #252655;
  }
</style>