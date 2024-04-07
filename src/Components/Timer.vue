<template>
    <div class="video-wrapper">
        <video playsinline autoplay muted loop poster="../assets/graphisme/petit prince désigne.png" width="100%">
            <source src="../assets/video/desert_-_108420 (Original).mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="header">
            <!--<img src="../assets/Logo_or.png" width="30%">-->
            <div class="title">
            <h1>Cassiopée</h1>
            <h3>Festival UTT</h3>
            <h2>Le Petit Prince</h2>
            </div>
            <vue3-flip-countdown class="countdown"
            countdownSize="3rem" labelSize="1.2rem" labelColor="#FFFFFF" 
            deadlineISO="2024-06-01T16:17:13.481Z" 
            :flipAnimation="false" mainColor="#FFFFFF" secondFlipColor="#ffffff"/>
        </div>      
    </div>
    
</template>

<style scoped>

video {
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.header{
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items : center;
  height: 60%;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.6);

}
.title{
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    font-weight: bold;
    gap: 20px;
    text-align: center;
    margin-bottom: 100px;
    
}
h1{
    font-size: 5rem;
    font-family: tan meringue;
}
h2{
    font-size: 3rem;
    font-family: deuxieme rang;
}
h3{
    font-size: 3rem;
    font-family: tan meringue;
}

.video-wrapper {
    /* Telling our absolute positioned video to 
    be relative to this element */
    position: relative;

    width:100%;
    height : 100vh;

    /* Will not allow the video to overflow the 
    container */
    overflow: hidden;

    /* Centering the container's content vertically 
    and horizontally */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.countdown {
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

