const app = Vue.createApp({
  data() {
    return {
       goals: [],
       
   };
  },

 methods: {
    addGoal(goal)
    {
        this.goals.push(goal);
    },

    removeGoal(index)
    {
        this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
