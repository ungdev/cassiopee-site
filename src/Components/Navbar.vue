<template>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><img id="nav-logo" src="../assets/Logo_or.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="true" data-toggle="dropdown" href="#">Après-Midi</a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Les stand</a>
                <a href="#" class="dropdown-item">La nourriture</a>
                <a href="#" class="dropdown-item">Les boissons</a>

            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#soiree">Soirée</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#apropos">A propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.billetweb.fr/cassiopee-2024" target="_blank" >Billeterie</a>
            
          </li>
        </ul>
      </div>
    </nav>
</template>

<style scoped>
nav{
  background-color: #f8f9fa;

}
#nav-logo {
  height: 40px;
  width: auto;
}
</style>