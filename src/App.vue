<template>
  <div id="app">

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <router-link to="/" class="navbar-brand">LaunchX</router-link>
      
      <div class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Mission Commanders
          </a>
          <div class="dropdown-menu">
            <router-link to="/commanders" class="dropdown-item">Mostrar</router-link>
            <router-link to="/addCommander" class="dropdown-item">Agregar</router-link>
          </div>
        </li>
      </div>
      
      <div class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Explorers
          </a>
          <div class="dropdown-menu">
            <router-link to="/explorers" class="dropdown-item">Mostrar</router-link>
            <router-link to="/addExplorer" class="dropdown-item">Agregar</router-link>
          </div>
        </li>
      </div>

    </nav>
<!--
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
        
        <li class="nav-item">
          <router-link to="/commanders" class="nav-link">Mission Commanders</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addCommander" class="nav-link">Agregar Mission Commanders</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addExplorer" class="nav-link">Agregar Explorer</router-link>
        </li>

      </div>
    </nav>
-->

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
