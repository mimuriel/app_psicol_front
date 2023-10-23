<template>
  <nav class="navbar navbar-expand-lg  bg-info">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">Gestión Academica</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse container" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>

                    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profesor
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/viewT">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/CreateT">Registrar Nuevo</router-link>
              </li>

            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Asignatura
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/viewA">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/CreateA">Registrar Nueva</router-link>
              </li>

            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudiantes
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/viewE">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/CreateE">Registrar Nuevo</router-link>
              </li>

            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudiante-Asignatura
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/viewSS">Listar</router-link>
              </li>


            </ul>
          </li>

        </ul>

      </div>
    </div>
  </nav>
  <div class="container-flui">
    <router-view />
  </div>

</template>

<style>


h5{
  color: black;
}
</style>
