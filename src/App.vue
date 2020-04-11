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
          <a class="nav-link text-white" href="#" data-toggle="modal" data-target="#configModal"><i class="fas fa-cog"></i></a>
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
    <main class="container-fluid pt-4 px-custom-0 container-schedule">
      <div class="overlay">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="schedule">
        <div class="sc-head text-center">
          <div>8h</div>
          <div>9h</div>
          <div>10h</div>
          <div>11h</div>
          <div>12h</div>
          <div>13h</div>
          <div>14h</div>
          <div>15h</div>
          <div>16h</div>
          <div>17h</div>
          <div>18h</div>
          <div>19h</div>
          <div>20h</div>
        </div>
        <div class="sc-monday" :class="{ active: hasSelect(showMonday) }">
          <div class="text-white bg-info p-3" v-for="course in mondayCourses" :class="predictStartEnd(course)">
            <div class="row">
              <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.debut.split(':')[0] }}h - {{ course.fin.split(':')[0] }}h
                </span>
              </div>
              <div class="col-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.salle }}
                </span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <p class="h5">
                  {{ course.matiere }}
                </p>
                <p>
                  {{ course.prof }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sc-tuesday" :class="{ active: hasSelect(showTuesday) }">
          <div class="text-white bg-info p-3" v-for="course in tuesdayCourses" :class="predictStartEnd(course)">
            <div class="row">
              <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.debut.split(':')[0] }}h - {{ course.fin.split(':')[0] }}h
                </span>
              </div>
              <div class="col-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.salle }}
                </span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <p class="h5">
                  {{ course.matiere }}
                </p>
                <p>
                  {{ course.prof }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sc-wednesday" :class="{ active: hasSelect(showWednesday) }">
          <div class="text-white bg-info p-3" v-for="course in wednesdayCourses" :class="predictStartEnd(course)">
            <div class="row">
              <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.debut.split(':')[0] }}h - {{ course.fin.split(':')[0] }}h
                </span>
              </div>
              <div class="col-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.salle }}
                </span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <p class="h5">
                  {{ course.matiere }}
                </p>
                <p>
                  {{ course.prof }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sc-thursday" :class="{ active: hasSelect(showThursday) }">
          <div class="text-white bg-info p-3" v-for="course in thursdayCourses" :class="predictStartEnd(course)">
            <div class="row">
              <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.debut.split(':')[0] }}h - {{ course.fin.split(':')[0] }}h
                </span>
              </div>
              <div class="col-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.salle }}
                </span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <p class="h5">
                  {{ course.matiere }}
                </p>
                <p>
                  {{ course.prof }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="sc-friday" :class="{ active: hasSelect(showFriday) }">
          <div class="text-white bg-info p-3" v-for="course in fridayCourses" :class="predictStartEnd(course)">
            <div class="row">
              <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.debut.split(':')[0] }}h - {{ course.fin.split(':')[0] }}h
                </span>
              </div>
              <div class="col-auto">
                <span class="badge badge-pill badge-light">
                    {{ course.salle }}
                </span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <p class="h5">
                  {{ course.matiere }}
                </p>
                <p>
                  {{ course.prof }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Modal -->
    <div class="modal fade" id="configModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="configModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="configModalLabel">Configuration</h5>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control" v-model="newTel" placeholder="prenom.nom">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" data-dismiss="modal" @click="persistTel">Enregistrer</button>
          </div>
        </div>
      </div>
    </div>
    <div class="loader" v-if="loading">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      showDate: window.DateTime.local(),
      tel: '',
      newTel: '',
      loading: false,
      mondayCourses: [],
      tuesdayCourses: [],
      wednesdayCourses: [],
      thursdayCourses: [],
      fridayCourses: []
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
      this.loadData()
    },
    nextWeek () {
      this.showDate = this.showDate.plus({weeks: 1}).startOf('week')
      this.loadData()
    },
    selectDate (newDate) {
      this.showDate = newDate
    },
    hasSelect (date) {
      return this.showDate.day === date.day
    },
    persistTel () {
      this.tel = window.localStorage.tel = this.newTel
      this.loadData()
    },
    predictStartEnd (course) {
      let debut = course.debut.split(':')[0]
      let fin = course.fin.split(':')[0]
      return 'start-' + parseInt(debut) + ' end-' + parseInt(fin)
    },
    loadData () {
      this.$weekCourses.query({tel: this.tel, date: this.showDate.toFormat('d-MM-yyyy')})
        .then((response) => {
          this.mondayCourses = response.data[0].courses
          this.tuesdayCourses = response.data[1].courses
          this.wednesdayCourses = response.data[2].courses
          this.thursdayCourses = response.data[3].courses
          this.fridayCourses = response.data[4].courses
        }, (response) => {
          console.error(response)
        })
    }
  },
  mounted () {
    this.$weekCourses = this.$resource('{tel}{/date}', {}, {}, {
      before: () => {
        this.loading = true
      },
      after: () => {
        this.loading = false
      }
    })

    if (window.localStorage.tel) {
      this.newTel = this.tel = window.localStorage.tel
      this.loadData()
    } else {
      window.$('#configModal').modal()
    }
  }
}
</script>

<style src="./grids.scss"></style>
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

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
    padding-top: 186px;
    color: white;
    font-size: 50px;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show>.nav-link {
    background-color: #0c5460 !important;
  }

  .schedule {
    display: grid;
    column-gap: 2px;
    grid-template-columns: 50px repeat(5, 1fr) 50px;
  }

  .schedule > div,
  .overlay {
    display: grid;
    grid-template-rows: repeat(12, 50px);
  }

  .line {
    height: 1px;
    background-color: #dee2e6;
    width: 100%;
  }

  .container-schedule {
    position: relative;
  }

  .sc-head {
    margin-top: -13px;
    background-color: white;
  }

  .container-schedule > div {
    position: absolute;
    top: 1.5rem;
    left: 15px;
    right: 15px;
  }

  @media (max-width: 991.98px) {
    .schedule > div:not(.active):not(.sc-head) {
      display: none;
    }

    .px-custom-0 {
      padding-left: 0;
      padding-right: 0;
    }

    .schedule {
      display: grid;
      column-gap: 2px;
      grid-template-columns: 50px auto;
    }
  }
</style>
