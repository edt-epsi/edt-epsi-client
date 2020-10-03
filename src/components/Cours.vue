<template>
<div id='cours' :class="{ active: hasSelect(showDateObject) }">
  <div class="text-white bg-epsi-light p-3" v-for="(cour, n) in coursesOfTheDay" :key=n :style="predictStartEnd(cour)">
    <div class="row">
      <div class="col-auto mr-auto">
        <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
          {{ cour.debut.split(':')[0] }}h{{ cour.debut.split(':')[1] }} - {{ cour.fin.split(':')[0] }}h{{ cour.fin.split(':')[1] }}
        </span>
      </div>
      <div class="col-auto">
        <span class="badge badge-pill badge-epsi-yellow text-epsi-dark">
          {{ cour.salle.split('-')[0] }}
        </span>
      </div>
    </div>
    <div class="row mt-2">
        <div class="col">
          <p class="h5">
            {{ cour.matiere }}
          </p>
          <p>
            {{ cour.prof }}
          </p>
        </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Cours',
  props: {
    courses: Object,
    hasSelect: Function,
    showDate: Object,
    dateOfTheWeek: Number
  },
  data () {
    return {
      coursesOfTheDay: this.courses,
      showDateObject: {}
    }
  },
  watch: {
    courses: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.coursesOfTheDay = newVal.courses
      }
    }
  },
  methods: {
    predictStartEnd (course) {
      let debutHour = parseInt(course.debut.split(':')[0])
      let debutMin = parseInt(course.debut.split(':')[1])
      let finHour = parseInt(course.fin.split(':')[0])
      let finMin = parseInt(course.fin.split(':')[1])
      let debut = (debutHour - 8) * 4 + (debutMin === 15 ? 2 : debutMin === 30 ? 3 : debutMin === 45 ? 4 : 1)
      let fin = (finHour - 8) * 4 + (finMin === 15 ? 2 : finMin === 30 ? 3 : finMin === 45 ? 4 : 1)
      return 'grid-row-start:' + debut + '; grid-row-end:' + fin + ';'
    }
  },
  beforeUpdate () {
    this.showDateObject = this.showDate.plus({ day: this.dateOfTheWeek - 1 })
  }
}
</script>

<style lang="scss">

</style>
