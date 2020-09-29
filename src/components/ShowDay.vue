<template>
  <a  id="showdays" cli class="nav-item nav-link" :class="{ active: hasSelect(showDateObject) }" href="#" @click.prevent="selectDate(showDateObject)">
    <div class="row text-center text-white">
      <div class="col p-0">{{this.dateOfWeekInLetters[0]}}<span class="d-none d-md-inline">{{this.dateOfWeekInLetters.slice(1)}}</span></div>
    </div>
    <div class="row text-center text-white">
      <div class="col p-0 day">{{ dateOfTheDay }}<span class="d-md-inline">/{{ monthOfTheDay }}</span></div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ShowDay',
  props: {
    dateOfTheWeek: Number,
    selectDate: Function,
    hasSelect: Function,
    showDate: Object
  },
  data () {
    return {
      arrayOfDaysInWeek: ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dateOfWeekInLetters: '',
      dateOfTheDay: 0,
      monthOfTheDay: 0,
      showDateObject: {}
    }
  },
  mounted () {
    this.showDateObject = this.showDate.plus({ day: this.dateOfTheWeek - 1 })
    this.dateOfTheDay = ('0' + this.showDateObject.day).slice(-2)
    this.monthOfTheDay = ('0' + this.showDateObject.month).slice(-2)
    this.dateOfWeekInLetters = this.arrayOfDaysInWeek[this.dateOfTheWeek - 1]
  },
  beforeUpdate () {
    this.showDateObject = this.showDate.plus({ day: this.dateOfTheWeek - 1 })
    this.dateOfTheDay = ('0' + this.showDateObject.day).slice(-2)
    this.monthOfTheDay = ('0' + this.showDateObject.month).slice(-2)
    this.dateOfWeekInLetters = this.arrayOfDaysInWeek[this.dateOfTheWeek - 1]
  }
}
</script>

<style lang="scss">

</style>
