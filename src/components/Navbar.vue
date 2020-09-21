<template>
  <div id="navbar">
    <nav class="navbar navbar-dark bg-epsi-dark fixed-top">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent='resetDate'><i class="fas fa-sync"></i></a>
        </li>
      </ul>
      <span class="navbar-text mr-auto text-white text-capitalize">{{ showMonthYear }}</span>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#" data-toggle="modal" data-target="#configModal" @click="loadConfig"><i class="fas fa-cog"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    showMonthYear: String,
    resetDate: Function,
    loadConfig: Function
  }
}
</script>

<style>

</style>
