<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-info fixed-top">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="#" @click.prevent="resetDate"><i class="fas fa-sync"></i></a>
        </li>
      </ul>
      <span class="navbar-text mr-auto text-white text-capitalize">{{ showMonthYear }}</span>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="#"><i class="fas fa-cog"></i></a>
        </li>
      </ul>
    </nav>
    <section class="container-fluid py-2 bg-info px-custom-0 fixed-top">
      <nav class="nav nav-pills nav-justified">
        <a class="nav-item nav-link mw-50" href="#" @click.prevent="prevWeek">
          <div class="row text-center text-white h-100">
            <div class="col p-0 align-self-center"><i class="fas fa-angle-left"></i></div>
          </div>
        </a>
        <a class="nav-item nav-link" :class="{ active: hasSelect(showMonday) }" href="#" @click.prevent="selectDate(showMonday)">
          <div class="row text-center text-white">
            <div class="col p-0">L<span class="d-none d-md-inline">undi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">{{ showMonday.day }}<span class="d-none d-md-inline">/{{ showMonday.toFormat('LL') }}</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" :class="{ active: hasSelect(showTuesday) }" href="#" @click.prevent="selectDate(showTuesday)">
          <div class="row text-center text-white">
            <div class="col p-0">M<span class="d-none d-md-inline">ardi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">{{ showTuesday.day }}<span class="d-none d-md-inline">/{{ showTuesday.toFormat('LL') }}</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" :class="{ active: hasSelect(showWednesday) }" href="#" @click.prevent="selectDate(showWednesday)">
          <div class="row text-center text-white">
            <div class="col p-0">M<span class="d-none d-md-inline">ercredi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">{{ showWednesday.day }}<span class="d-none d-md-inline">/{{ showWednesday.toFormat('LL') }}</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" :class="{ active: hasSelect(showThursday) }" href="#" @click.prevent="selectDate(showThursday)">
          <div class="row text-center text-white">
            <div class="col p-0">J<span class="d-none d-md-inline">eudi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">{{ showThursday.day }}<span class="d-none d-md-inline">/{{ showThursday.toFormat('LL') }}</span></div>
          </div>
        </a>
        <a class="nav-item nav-link" :class="{ active: hasSelect(showFriday) }" href="#" @click.prevent="selectDate(showFriday)">
          <div class="row text-center text-white">
            <div class="col p-0">V<span class="d-none d-md-inline">endredi</span></div>
          </div>
          <div class="row text-center text-white">
            <div class="col p-0 day">{{ showFriday.day }}<span class="d-none d-md-inline">/{{ showFriday.toFormat('LL') }}</span></div>
          </div>
        </a>
        <a class="nav-item nav-link mw-50" href="#" @click.prevent="nextWeek">
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
  name: 'app',
  data () {
    return {
      showDate: window.DateTime.local()
    }
  },
  computed: {
    showMonthYear () {
      return this.showDate.setLocale('fr').toFormat('LLLL y')
    },
    startWeekDate () {
      return this.showDate.startOf('week')
    },
    showMonday () {
      return this.startWeekDate
    },
    showTuesday () {
      return this.startWeekDate.plus({ day: 1 })
    },
    showWednesday () {
      return this.startWeekDate.plus({ day: 2 })
    },
    showThursday () {
      return this.startWeekDate.plus({ day: 3 })
    },
    showFriday () {
      return this.startWeekDate.plus({ day: 4 })
    }
  },
  methods: {
    resetDate () {
      this.showDate = window.DateTime.local()
    },
    prevWeek () {
      this.showDate = this.showDate.plus({weeks: -1}).endOf('week').plus({days: -2})
    },
    nextWeek () {
      this.showDate = this.showDate.plus({weeks: 1}).startOf('week')
    },
    selectDate (newDate) {
      this.showDate = newDate
    },
    hasSelect (date) {
      return this.showDate.day === date.day
    }
  }
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
