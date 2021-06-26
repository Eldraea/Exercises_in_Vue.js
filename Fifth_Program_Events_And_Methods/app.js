const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput()
    {
      this.confirmedName = this.name;
    },

    submitForm(){
      alert('Submitted!!');
    },

    add(number)
    {
      return this.counter= this.counter + number;
    },

    reduce(number)
    {
      return this.counter= this.counter - number;
    },

    setName(event, lastName)
    {
       this.name= event.target.value + ' '+  lastName;
    }
  }
});

app.mount('#events');
