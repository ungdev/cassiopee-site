<template>
      <nav class="navbar navbar-expand-lg navbar-dark "><!-- bg-dark -->
      <a class="navbar-brand" href="#"><img id="nav-logo" src="../assets/Logo_or.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="true" data-toggle="dropdown" href="#">Après-midi</a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Les stands</a>
                <a href="#" class="dropdown-item">Les animations</a>
                <a href="#" class="dropdown-item">Restauration</a>
                <a href="#" class="dropdown-item">Boissons</a>

            </div>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="true" data-toggle="dropdown" href="#">La soirée</a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Les artistes</a>
                <a href="#" class="dropdown-item">Restauration</a>
                <a href="#" class="dropdown-item">Boissons</a>

            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#apropos">A propos</a>
          </li>
          <li class="nav-item billeterie active">
            <a class="nav-link" href="https://www.billetweb.fr/cassiopee-2024" target="_blank" >Billetterie</a>
            
          </li>
        </ul>
      </div>
    </nav>
</template>

<style scoped>
.navbar{
  background-color: #4452ad;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}

#nav-logo {
  height: 40px;
  width: auto;
}
.navbar-nav{
  text-align: right;
  gap: 20px;
}
.billeterie {
  
  border-radius: 15px;
  padding: 0px 5px;
  margin-left: 10px;
  background-color: #fAd14e;
  font-weight: bold;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

 }
</style>