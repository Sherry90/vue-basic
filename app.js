const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmInput(event){
      this.confirmedName = event.target.value;
    },
    submitForm(event){
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num){
      this.counter += num;
    },
    reduce(num){
      this.counter -= num;
    },
  }
});

app.mount('#events');
