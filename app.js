const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish Vue Course",
      vueLink: "https://vuejs.org/"
    }
  }
});

app.mount("#user-goal");