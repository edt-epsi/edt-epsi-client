<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-info fixed-top">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="#"><i class="fas fa-sync"></i></a>
        </li>
      </ul>
      <span class="navbar-text mr-auto text-white">Avril 2020</span>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#"><i class="fas fa-cog"></i></a>
        </li>
      </ul>
    </nav>
    <section class="container-fluid py-2 bg-info px-custom-0 fixed-top">
      <nav class="nav nav-pills nav-justified">
        <a class="nav-item nav-link mw-50" href="#">
          <div class="row text-center text-white h-100">
            <div class="col p-0 align-self-center"><i class="fas fa-angle-left"></i></div>
          </div>
        </a>
        <a class="nav-item nav-link" href="#">
          <div class="row text-center text-white">
            <div class="col p-0">L<span class="d-none d-md-inline">undi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">6<span class="d-none d-md-inline">/04</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" href="#">
          <div class="row text-center text-white">
            <div class="col p-0">M<span class="d-none d-md-inline">ardi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">7<span class="d-none d-md-inline">/04</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" href="#">
          <div class="row text-center text-white">
            <div class="col p-0">M<span class="d-none d-md-inline">ercredi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">8<span class="d-none d-md-inline">/04</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" href="#">
          <div class="row text-center text-white">
            <div class="col p-0">J<span class="d-none d-md-inline">eudi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">9<span class="d-none d-md-inline">/04</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" href="#">
          <div class="row text-center text-white">
            <div class="col p-0">V<span class="d-none d-md-inline">endredi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">10<span class="d-none d-md-inline">/04</span></div>
          </div>
        </a>
        <a class="nav-item nav-link mw-50" href="#">
          <div class="row text-center text-white h-100">
            <div class="col p-0 align-self-center"><i class="fas fa-angle-right"></i></div>
          </div>
        </a>
      </nav>
    </section>
    <main class="container-fluid pt-4">
      <table class="table">
        <tr>
          <th>8h</th>
          <th></th>
        </tr>
        <tr>
          <th>9h</th>
          <th></th>
        </tr>
        <tr>
          <th>10h</th>
          <th></th>
        </tr>
        <tr>
          <th>11h</th>
          <th></th>
        </tr>
        <tr>
          <th>12h</th>
          <th></th>
        </tr>
        <tr>
          <th>13h</th>
          <th></th>
        </tr>
        <tr>
          <th>14h</th>
          <th></th>
        </tr>
        <tr>
          <th>15h</th>
          <th></th>
        </tr>
        <tr>
          <th>16h</th>
          <th></th>
        </tr>
        <tr>
          <th>17h</th>
          <th></th>
        </tr>
        <tr>
          <th>18h</th>
          <th></th>
        </tr>
        <tr>
          <th>19h</th>
          <th></th>
        </tr>
        <tr>
          <th>20h</th>
          <th></th>
        </tr>
      </table>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "~bootstrap/dist/css/bootstrap.min.css";
  @import "~@fortawesome/fontawesome-free/css/all.min.css";

  html, body {
    height: 100%;
  }

  section.fixed-top {
    top: 56px;
  }

  body {
    padding-top: 136px;
  }

  .mw-50 {
    max-width: 50px;
  }

  .table {
    table-layout: fixed;
  }

  .table tr th:first-child {
    position: relative;
    top: -25px;
    border-top: none;
  }

  .table th {
    width: 50px;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show>.nav-link {
    background-color: #0c5460 !important;
  }

  @media (max-width: 991.98px) {
    .table td:not(.active),
    .table tr th:last-child {
      display: none;
    }

    .px-custom-0 {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
