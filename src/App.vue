<script setup>
import Navbar from './Components/Navbar.vue'
import Timer from './Components/Timer.vue'
import VerticalCard from './Components/VerticalCard.vue';
import TextAndImageLeft from './Components/TextAndImageLeft.vue';
import TextAndImageRight from './Components/TextAndImageRight.vue';
import CopilotBook from './Components/CopilotBook.vue';

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
       par an au cœur de l’Université de Technologie de Troyes. Cette année Cassiopée se réinvente
        et consiste en : Une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer ! Une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"
           image="src//assets//Logo.png"></TextAndImageLeft>
      <br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue; margin-left: 5%">Une après-midi pour petits et grands</h1>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Entrée libre pour tous</h2>
        </div>
        <TextAndImageRight msg="De 15h à 20h, le public est attendu à l’UTT pour voyager dans l’univers du Petit Prince et découvrir les différentes associations étudiantes, leurs projets et participer à des activités ludiques. "
        image="src/assets/graphisme/petit prince tient le titre.png"></TextAndImageRight>
      </div>

  
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue; margin-left: 5%">Stands</h1>
      </div>
      <div id="flip">
        <VerticalCard front-title="L'instant breton" img="background-image: url(src/assets/stand/instantbreton1.jpeg)" back-text="Galette(complète, saucisse et végétarienne) : 7€
Crêpe au sucre : 2,50€
Crêpe Nutella : 3€ 
Crêpe (Beurre-sucre, caramel beurre salé, miel amandes effilées, pâte à tartiner Ô délice de Lucas, confiture) : 3,50 €"
backTitle="L'instant Breton"></VerticalCard>
        <VerticalCard front-title="Donuts d'Omer"></VerticalCard>
      </div>
      <div id="flip">
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.751217881598!2d4.064201176516134!3d48.26916197125829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee99a0cb4a3a57%3A0x42148ce859fa2d02!2sUniversit%C3%A9%20de%20Technologie%20de%20Troyes!5e0!3m2!1sfr!2sfr!4v1713106420010!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div style="width: 100%; display: flex; align-items: left;">
        <h1 class="title">Artistes</h1>
      </div>
      <div style="width: 100%;">
        <CopilotBook/>
      </div>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 style="color: aliceblue;">A propos de la soirée</h1>
      </div>
      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Lorem Ipsum</h2>
        </div>
        <TextAndImageRight msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageRight>
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
           pleins de surprises !"
           image="src//assets//Logo_or.png"></TextAndImageLeft>
      </div>
      
      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2 style="color: aliceblue;">Lorem Ipsum</h2>
        </div>
        <TextAndImageRight msg="Cassiopée est un festival incontournable qui a lieu une fois
       par an au cœur de l’Université de Technologie de Troyes.Cette année Cassiopée se réinvente
        et consiste en :☀️ une après-midi pour promouvoir la vie étudiante et les activités de l’UTT
         dans laquelle vous retrouverez des stands de vulgarisation scientifique, de présentation de
          nos associations et pleins d’autres activités ludiques sans oublier les stands de 
          restauration et de quoi vous désaltérer !⭐️ une soirée avec de la musique dans tous 
          les coins et pour tous les goûts, des stands de restauration, un feu d’artifice et encore
           pleins de surprises !"></TextAndImageRight>
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
  gap: 30px;
  margin-bottom: 30px;
}
body {
  background-color: #f8f9fa;
}
#aprem {
  padding: 50px 10px;
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
@media (max-width: 1000px) {  
  .text-container {
    width: 100%;
  }
  .right-title{
    color: aliceblue;
    position: relative;
    left:5%;
  }
}
@media (max-width: 500px) {  
  .text-container {
    width: 95%;
  }
  .right-title{
    color: aliceblue;
    position: relative;
    left:5%;
  }

}
</style>