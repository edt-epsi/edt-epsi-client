<template>
  <div id="app">
    <Navbar :show-month-year=showMonthYear :reset-date=resetDate :load-config=loadConfig />
    <section class="container-fluid py-2 bg-epsi-dark px-custom-0 fixed-top">
      <nav class="nav nav-pills nav-justified">
        <a class="nav-item nav-link mw-50" href="#" @click.prevent="prevWeek">
          <div class="row text-center text-white h-100">
            <div class="col p-0 align-self-center"><i class="fas fa-angle-left"></i></div>
          </div>
        </a>
        <template v-for="index in hasCoursesSaturday() ? 5 : 6">
          <ShowDay v-bind:key=index :show-date=startWeekDate :date-of-the-week=index :select-date=selectDate :has-select=hasSelect />
        </template>
        <a class="nav-item nav-link mw-50" href="#" @click.prevent="nextWeek">
          <div class="row text-center text-white h-100">
            <div class="col p-0 align-self-center"><i class="fas fa-angle-right"></i></div>
          </div>
        </a>
      </nav>
    </section>
    <main class="container-fluid pt-4 px-custom-0 container-schedule">
      <div :class="{ 'hasSaturday': !hasCoursesSaturday() }">
        <div class="overlay">
          <div v-for="n in 49" class="line">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div :class="{ 'd-none': hasCoursesSaturday() }"></div>
          </div>
        </div>
        <div class="schedule">
          <div class="sc-head text-center">
            <div v-for="n in 13" v-bind:key=n>
                {{ ('0' + (n + 7)).slice(-2) }}h
            </div>
          </div>
          <div class="sc-monday" :class="{ active: hasSelect(showMonday) }">
            <div class="text-white bg-epsi-light p-3" v-for="course in mondayCourses" :style="predictStartEnd(course)">
              <div class="row">
                <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
                    {{ course.debut.split(':')[0] }}h{{ course.debut.split(':')[1] }} - {{ course.fin.split(':')[0] }}h{{ course.fin.split(':')[1] }}
                </span>
                </div>
                <div class="col-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
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
            <div class="text-white bg-epsi-light p-3" v-for="course in tuesdayCourses" :style="predictStartEnd(course)">
              <div class="row">
                <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
                    {{ course.debut.split(':')[0] }}h{{ course.debut.split(':')[1] }} - {{ course.fin.split(':')[0] }}h{{ course.fin.split(':')[1] }}
                </span>
                </div>
                <div class="col-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
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
            <div class="text-white bg-epsi-light p-3" v-for="course in wednesdayCourses" :style="predictStartEnd(course)">
              <div class="row">
                <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
                    {{ course.debut.split(':')[0] }}h{{ course.debut.split(':')[1] }} - {{ course.fin.split(':')[0] }}h{{ course.fin.split(':')[1] }}
                </span>
                </div>
                <div class="col-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
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
            <div class="text-white bg-epsi-light p-3" v-for="course in thursdayCourses" :style="predictStartEnd(course)">
              <div class="row">
                <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
                    {{ course.debut.split(':')[0] }}h{{ course.debut.split(':')[1] }} - {{ course.fin.split(':')[0] }}h{{ course.fin.split(':')[1] }}
                </span>
                </div>
                <div class="col-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
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
            <div class="text-white bg-epsi-light p-3" v-for="course in fridayCourses" :style="predictStartEnd(course)">
              <div class="row">
                <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
                    {{ course.debut.split(':')[0] }}h{{ course.debut.split(':')[1] }} - {{ course.fin.split(':')[0] }}h{{ course.fin.split(':')[1] }}
                </span>
                </div>
                <div class="col-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
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
          <div class="sc-saturday" :class="{ active: hasSelect(showSaturday), 'd-none': hasCoursesSaturday() }">
            <div class="text-white bg-epsi-light p-3" v-for="course in saturdayCourses" :style="predictStartEnd(course)">
              <div class="row">
                <div class="col-auto mr-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
                    {{ course.debut.split(':')[0] }}h{{ course.debut.split(':')[1] }} - {{ course.fin.split(':')[0] }}h{{ course.fin.split(':')[1] }}
                </span>
                </div>
                <div class="col-auto">
                <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
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
      </div>
    </main>
    <!-- Modal -->
    <div class="modal fade" id="configModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="configModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="configModalLabel">Configuration</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-if="!modalIsRequired">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control" v-model="newTel" placeholder="prenom.nom" required>
            <hr>
            <p>
              <i class="fas fa-info-circle text-epsi-yellow"></i> EDT EPSI (<a href="https://edt.epsi.best">edt.epsi.best</a>) est un projet étudiant. L'application n'est pas liée directement ou indirectement à l'EPSI (<a href="https://epsi.fr">epsi.fr</a>)
            </p>
            <hr>
            <p>
              EDT EPSI - Version: 1.1.0
              <br>
              Pour toute demande, envoyer un mail à <a href="mailto:contact@epsi.best?subject=[EDT EPSI]">contact@epsi.best</a>
            </p>
            <hr>
            F.A.Q.
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=fr" target="_blank"><i class="far fa-question-circle"></i> Comment installer l'application ?</a>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-epsi-light" data-dismiss="modal" v-if="!modalIsRequired">Annuler</button>
            <button type="button" class="btn btn-epsi-yellow text-epsi-dark" @click.prevent="persistTel">Enregistrer</button>
          </div>
        </div>
      </div>
    </div>
    <div class="loader" v-if="loading !== 0">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import ShowDay from '@/components/showday'

export default {
  name: 'app',
  components: {
    Navbar,
    ShowDay
  },
  data () {
    return {
      showDate: window.DateTime.local(),
      tel: '',
      newTel: '',
      loading: 0,
      mondayCourses: [],
      tuesdayCourses: [],
      wednesdayCourses: [],
      thursdayCourses: [],
      fridayCourses: [],
      saturdayCourses: [],
      previousRequest: null
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
    },
    showSaturday () {
      return this.startWeekDate.plus({ day: 5 })
    },
    modalIsRequired () {
      return this.tel === ''
    }
  },
  methods: {
    resetDate () {
      this.showDate = window.DateTime.local()
      this.loadData()
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
    hasCoursesSaturday () {
      return this.saturdayCourses.length === 0
    },
    persistTel () {
      if (this.newTel !== '') {
        window.$('#configModal').modal('hide')
        this.tel = window.localStorage.tel = this.newTel
        this.loadData()
      }
    },
    predictStartEnd (course) {
      let debutHour = parseInt(course.debut.split(':')[0])
      let debutMin = parseInt(course.debut.split(':')[1])
      let finHour = parseInt(course.fin.split(':')[0])
      let finMin = parseInt(course.fin.split(':')[1])

      let debut = (debutHour - 8) * 4 + (debutMin === 15 ? 2 : debutMin === 30 ? 3 : debutMin === 45 ? 4 : 1)
      let fin = (finHour - 8) * 4 + (finMin === 15 ? 2 : finMin === 30 ? 3 : finMin === 45 ? 4 : 1)

      return 'grid-row-start:' + debut + '; grid-row-end:' + fin + ';'
    },
    loadData () {
      this.$weekCourses.query({tel: this.tel, date: this.showDate.toFormat('d-MM-yyyy')})
        .then((response) => {
          this.mondayCourses = response.data[0].courses
          this.tuesdayCourses = response.data[1].courses
          this.wednesdayCourses = response.data[2].courses
          this.thursdayCourses = response.data[3].courses
          this.fridayCourses = response.data[4].courses
          this.saturdayCourses = response.data[5].courses
        }, (response) => {
          console.error(response)
        })
    },
    loadConfig () {
      this.newTel = this.tel
    }
  },
  mounted () {
    this.$weekCourses = this.$resource('{tel}{/date}', {}, {}, {
      before: (request) => {
        this.loading++
        if (this.previousRequest) {
          this.previousRequest.abort()
        }

        this.previousRequest = request
      },
      after: () => {
        this.loading--
      }
    })

    if (window.localStorage.tel && window.localStorage.tel !== '') {
      this.newTel = this.tel = window.localStorage.tel
      this.loadData()
    } else {
      window.$('#configModal').modal()
    }
  }
}
</script>

<style lang="scss">

  $theme-colors: (
    "epsi-dark": #271549,
    "epsi-light": #77649b,
    "epsi-yellow": #fdce37
  );

  @import "~bootstrap/scss/bootstrap";
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
    background-color: #fdce37 !important;
  }

  .nav-pills .nav-link.active .text-white,
  .nav-pills .show>.nav-link .text-white{
    color: #271549 !important;
  }

  .schedule {
    display: grid;
    column-gap: 2px;
    grid-template-columns: 50px repeat(5, 1fr) 50px;
  }

  .hasSaturday .schedule {
    grid-template-columns: 50px repeat(6, 1fr) 50px;
  }

  .schedule > div,
  .overlay {
    display: grid;
    grid-template-rows: repeat(48, minmax(12.5px, 1fr)) 1px;
  }

  .schedule .sc-head {
    grid-template-rows: repeat(12, minmax(50px, 1fr)) 1px;
  }

  .overlay {
    position: absolute;
    top: 1.5rem;
    left: 15px;
    right: 15px;
    bottom: 0px;
    z-index: -1;
  }

  .overlay .line {
    height: 100%;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
  .overlay .line:nth-child(4n + 1) {
    border-top: 1px solid #dee2e6;
  }

  .container-schedule {
    position: relative;
  }

  .sc-head > div {
    margin-top: -13px;
    background-color: white;
  }

  .list-group-item:last-child {
    border-bottom: none;
  }

  @media (min-width: 992px) {
    .overlay .line {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }

    .hasSaturday .overlay .line {
      grid-template-columns: repeat(6, 1fr);
    }

    .overlay .line>div {
      border-right: 1px solid #fdce37;
      border-left: 1px solid #fdce37;
    }

    .overlay .line>div:first-child {
      border-left: none;
    }

    .overlay .line>div:nth-last-child(-n+2) {
      border-right: none;
    }

    .hasSaturday .overlay .line>div:nth-last-child(-n+2) {
      border-right: 1px solid #fdce37;
    }

    .hasSaturday .overlay .line>div:last-child {
      border-right: none;
    }
  }

  @media (max-width: 991.98px) {
    .schedule > div:not(.active):not(.sc-head) {
      display: none;
    }

    .px-custom-0 {
      padding-left: 0;
      padding-right: 0;
    }

    .schedule,
    .hasSaturday .schedule {
      display: grid;
      column-gap: 2px;
      grid-template-columns: 50px auto;
    }
  }
</style>
