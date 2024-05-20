<script setup>
import Navbar from './Components/Navbar.vue'
import Timer from './Components/Timer.vue'
import VerticalCard from './Components/VerticalCard.vue';
import TextAndImageLeft from './Components/TextAndImageLeft.vue';
import TextAndImageRight from './Components/TextAndImageRight.vue';
import CopilotBook from './Components/CopilotBook.vue';
import Slideshow from './Components/Slideshow.vue';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <Timer />

  <div id="grad">
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
           image="/Logo.png"></TextAndImageLeft>
      <br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1  >Une après-midi pour petits et grands</h1>
      </div>

      <div class="text-container">
        <div style="width: 100%; display: flex; align-items: flex-end;">
          <h2>Entrée libre pour tous</h2>
        </div>
        <TextAndImageRight msg="De 15h à 20h, le public est attendu à l’UTT pour voyager dans l’univers du Petit Prince et découvrir les différentes associations étudiantes, leurs projets et participer à des activités ludiques. "
        image="/graphisme/petit prince tient le titre.png"></TextAndImageRight>
      </div>

  
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 id="stand" >Stands</h1>
      </div>
      <div class="box">
        <h2> Parcours Mouton : Apprendre et S'amuser </h2>
        <img src="/src/assets/graphisme/Etoile.png" alt="parcours" class="box-img-top"/>
        <img src="/src/assets/graphisme/Goateeeee.png" alt="parcours" class="box-img-bottom"/>
        <br>
        <div class="fliprow">
          <div>
            <h2>Troyes Racing Team</h2>
            <VerticalCard front-title="" img="background-image: url( /stand/fanfare.jpg)" back-text="L’association Troyes Racing Team présentera son projet de conception et fabrication d’une voiture de course (qui se rapproche de la formule 1) et organisera une course de voitures télécommandées. " backTitle=""></VerticalCard>
          </div>
          <div>
            <h2>Robotik'UTT</h2>
          <VerticalCard front-title=" " img="background-image: url( /stand/robot.jpeg)" back-text="Le club Robotik UTT organisera un Rocket League grandeur nature, un football avec des voitures téléguidées. Pour les connaisseurs du jeu vidéo ou pour les curieux, c’est l’occasion de manier et de découvrir une voiture faite maison.  "
backTitle=""> </VerticalCard>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center">
          
          <div  class="fliprow seul">
            <h2>Dessine un mouton</h2>
            <VerticalCard front-title="" img="background-image: url( /stand/mouton.jpg)" back-text=" Les âmes d’enfants pourront participer à l’activité “dessine-moi un mouton”, et fabriquer des bracelets brésiliens et de petits paniers en tissus ou autres décorations avec le club Tiss’UTT, club couture des étudiants."
              backTitle=""> </VerticalCard>
          </div>
        </div>
      </div>      
      <br>
      <h2> Parcours Rose : Partager et Grandir</h2> 
      
      <br><br>
      
      <div  class="fliprow">
        <div>
          <h2>Ch'UTT de vers</h2>
        <VerticalCard front-title=" " img="background-image: url( /stand/nereides.jpeg)" back-text=" Les enfants et les curieux pourront percer à jour le doublage à travers un atelier proposé par les Ch’UTT de vers, la célèbre troupe de théâtre de l’UTT  ; et partager un bon moment chantant autour d’un karaoké organisé par la chorale Lalal’UTT."
backTitle=""></VerticalCard>
        </div>
        <div>
          <h2>Sec'UTT</h2>
        <VerticalCard front-title=" " img="background-image: url( /stand/secutt.jpeg)" back-text="Pour les aventuriers, Sec’UTT, l’association étudiante de secourisme, veillera à ce qu’ils ne soient pas en détresse lors de leurs prochains défis, en proposant un parcours de brancardage et une activité sur le massage cardiaque. "
backTitle=""></VerticalCard>
        </div>
      </div>
      <div  class="fliprow seul">
        <h2>Pôle santé</h2>
        <VerticalCard front-title=" " img="background-image: url( /stand/lunette.jpeg)" back-text="Le pôle Santé fera découvrir de manière ludique les effets néfastes de l’alcool, de la drogue ou de la fatigue sur le corps humain, avec un parcours d’obstacle à effectuer en portant des lunettes de simulation reproduisant ces effets."
backTitle=""></VerticalCard>

      </div>

      <br>
      <diV class="box">
      <h2> Parcours Renard : Aimer et Apprivoiser </h2>
      <img src="/src/assets/graphisme/petit prince réfléchit.png" alt="parcours" class="box-img-top"/>
      <img src="/src/assets/graphisme/mouton de dos.png" alt="parcours" class="box-img-bottom"/>
      <br>
      <br>
      <div  class="fliprow">
        <div>
          <h2>Néréides</h2>
          <VerticalCard front-title=" " img="background-image: url( /stand/nereides.jpeg)" back-text="L’association Néréides présentera un bateau éco-responsable et durable, en cours de construction en vue de sa participation au Monaco Energy Boat Challenge."></VerticalCard>
        </div>
        <div>
          <h2>Flocons sur les flots</h2>
        <VerticalCard front-title=" " img="background-image: url( /stand/canard.jpg)" back-text="un tour de l'Atlantique à la voile, voyage de 11 mois pour apprivoiser l’océan, à partir d’août 2024 avec 18 000 km à parcourir."
        backTitle=""></VerticalCard>
        </div> 
      </div>
      <div style="display: flex; flex-direction: column; align-items: center">   
        <div  class="fliprow seul">
        <h2>Ulisse</h2>
        <br>
        <VerticalCard front-title=" " img="background-image: url( /stand/lunette.jpeg)" back-text="L’association Ulisse (Union Locale d'Ingénierie Sociale, Solidaire et Environnementale) fera participer petits et grands à un blind test sur le miel et offrira un temps convivial de fabrication d’éponges."
backTitle=""></VerticalCard>
      </div>
        </div>
    </diV>
<h2 id="animation"> Animations</h2>
<br>
<br>
      <div  class="fliprow">
        <VerticalCard front-title=" " img="background-image: url( /stand/cheers.jpg)" back-text="L'équipe de Cheerleeding de l'UTT proposera un show de leur meilleurs performances."
backTitle="Cheers’UTT" ></VerticalCard>
        <VerticalCard front-title=" " back-text="Peacetone Brass Band,  la fanfare de l’UTT proposera un extrait de leur meilleurs reprises musicales " back-title="Peacetone Brass Band" img="background-image: url( /stand/fanfare.jpg)"></VerticalCard>
      </div>
      <br>
      <div class="box">
        <img src="/src/assets/graphisme/mouton fier.png" alt="parcours" class="box-img-top" style="right: 0%;"/>
      <img src="/src/assets/graphisme/Goateeeee.png" alt="parcours" class="box-img-bottom"/>
        <h2 id="restauration"> Restauration</h2>
        <br>
        <br>
        <div  class="fliprow">
        <VerticalCard front-title=" " img="background-image: url( /stand/instantbreton1.jpeg)" back-text="Galette(complète, saucisse et végétarienne) : 7€
Crêpe au sucre : 2,50€
Crêpe Nutella : 3€ 
Crêpe (Beurre-sucre, caramel beurre salé, miel amandes effilées, pâte à tartiner Ô délice de Lucas, confiture) : 3,50 €"
backTitle="L'instant Breton"></VerticalCard>
        <VerticalCard front-title=" " back-title="Donuts d'Omer" back-text="Grand Donuts : 2,8€
        Petit Donuts : 1,8€
        Salade de Fruit : 2€" img="background-image: url( /stand/omer.webp)" ></VerticalCard>
      </div>
    </div>
      <br>
      <h2 id="boisson">Boissons</h2>
<br>
      <div  class="fliprow">
        <VerticalCard back-title="Cocktails sans alcools" back-text="Nos étudiants vous servirons une selection de vos cocktails préférés mais revisité sans alcools" img="background-image: url( /stand/cocktails.jpeg)" ></VerticalCard>
        <VerticalCard back-title="Smoothie et Bubble Tea" back-text="Nous vous proposerons des smoothies aux frutis de saisons et des bubbles tea" img="background-image: url( /stand/smoothie.jpeg)"></VerticalCard>
      </div>
    </div>

    <div id="soirée">
      <div class="box">
      <br>
      <div style="width: 100%; display: flex; align-items: left;">
        <h1 class="title">Localisation</h1>
      </div>
      <img src="/src/assets/graphisme/Planète anneau.png" alt="parcours" class="box-img-top"/>
      <img src="/src/assets/graphisme/renard qui dort.png" alt="parcours" class="box-img-bottom"/>
      <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.751217881598!2d4.064201176516134!3d48.26916197125829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee99a0cb4a3a57%3A0x42148ce859fa2d02!2sUniversit%C3%A9%20de%20Technologie%20de%20Troyes!5e0!3m2!1sfr!2sfr!4v1713106420010!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br><br>
    </div>
      <br id="artiste"><br>
      <div style="width: 100%; display: flex; align-items: left;">
        <h1 class="title">Artistes</h1>
      </div>
      <br>
      <div style="width: 100%;" >
        <CopilotBook/>
      </div>
      <br>
      <div class="box">
      <h2 id="restauration2"> Restauration</h2>
      <img src="/src/assets/graphisme/mouton fier.png" alt="parcours" class="box-img-top" style="right: 0%;"/>
      <img src="/src/assets/graphisme/Goateeeee.png" alt="parcours" class="box-img-bottom"/>
      <br>
      <br>
      <div  class="fliprow">
        <VerticalCard front-title=" " img="background-image: url( /stand/instantbreton1.jpeg)" back-text="Galette(complète, saucisse et végétarienne) : 7€
Crêpe au sucre : 2,50€
Crêpe Nutella : 3€ 
Crêpe (Beurre-sucre, caramel beurre salé, miel amandes effilées, pâte à tartiner Ô délice de Lucas, confiture) : 3,50 €"
backTitle="L'instant Breton"></VerticalCard>
        <VerticalCard front-title=" " back-title="Donuts d'Omer" back-text="Grand Donuts : 2,8€
        Petit Donuts : 1,8€
        Salade de Fruit : 2€" img="background-image: url( /stand/omer.webp)" ></VerticalCard>
      </div>
    </div>
      <br>
      <h2 id="boisson2">Boissons</h2>
<br>
      <div  class="fliprow">
        <VerticalCard back-title="Cocktails sans alcools" back-text="Nos étudiants vous servirons une selection de vos cocktails préférés mais revisité sans alcools" img="background-image: url( /stand/cocktails.jpeg)" ></VerticalCard>
        <VerticalCard back-title="Smoothie et Bubble Tea" back-text="Nous vous proposerons des smoothies aux frutis de saisons et des bubbles tea" img="background-image: url( /stand/smoothie.jpeg)"></VerticalCard>
      </div>
      
      <br>
      <br>
      <div class="box">
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1 >Partenaires </h1>
        <img src="/src/assets/graphisme/Planète anneau.png" alt="parcours" class="box-img-top"/>
      <img src="/src/assets/graphisme/renard qui dort.png" alt="parcours" class="box-img-bottom"/>
      </div>
        <br>
        <div class="boxslide">
        <Slideshow/>
      </div>
    </div>
      <br>
      <br>
      <div style="width: 100%; display: flex; align-items: flex-end;">
        <h1  >Equipe Cassiopée</h1>
      </div>
      <div id="trombi">
        <img src="@\assets\petit-prince.jpg"  alt="Image" />
      </div>
      
    </div>
    
  </div>   
  </body>
</template>

<style scoped>
.box-img-top{
  position: absolute;
  width: 20%; 
  top: -10%; 
  right: -3%; 
}
.box-img-bottom{
  position: absolute;
   width: 20%; 
   bottom: -10%; 
   left: -3%; 
   transform: rotateY(180deg);
}
.box{
  position: relative;
  background: rgba(0,0,0,0.2);  
  background-size: cover;
  padding-top: 5px; 
  padding-left: 20%;
  padding-right: 20%;
  border-radius: 10px;
}

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
.fliprow{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}
.seul{
  gap: 0;
}
body {
  overflow-x: hidden;
  background-color: #f8f9fa;
}
#aprem {
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  background: rgba(0,0,0,0);
}
#grad {
background-image: linear-gradient(#3447c3cd, #252655);
min-height: 25vh;
}
#soirée {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  background: rgba(0,0,0,0);

}

.boxslide{
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
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
  .box-img-bottom{
    display: none;
  }
  .box-img-top{
    display: none;
  }
  .box{
  background : rgba(0,0,0,0.2);
  padding-left: 10%;
  padding-right: 10%;
  border-radius: 10px;

  }
  .text-container {
    width: 95%;
  }
  .right-title{
    color: aliceblue;
    position: relative;
    left:5%;
  }
  .maps{
    width: 300px;
    height: 200px;
  }
  #aprem {
    padding: 50px 0px;
  }
  .fliprow {
    width:100%;
    display: flex;
    margin: auto;
    flex-direction: column;
    gap: 0;
    padding:10px;
    margin-bottom: 10px;
    
    }

}
</style>