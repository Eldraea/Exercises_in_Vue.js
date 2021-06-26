const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastName: '',
    };
  },
  watch:
  {
    
  },
  

  computed:{

    
  },
  methods: {

    outputFullname()
    {
      if(this.name === '')
       return '';
      return this.name + ' ' + 'Fey';
    },

    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput()
    {
      this.name= '';
    }
  }
});

app.mount('#events');
