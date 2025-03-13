const app = Vue.createApp({
    data() {
      return {
        taskInput: "",
        tasks: [],
        showButton: true,
        switchTaskTXT: "Hide List",
      };
    },
    computed: {
      switchStyle() {
        return this.showButton ? "hide" : "show";
      },
    },
    methods: {
      addTask() {
        if (this.taskInput.trim()) {
          this.tasks.push(this.taskInput);
        }
        this.taskInput = "";
      },
      switchTasks() {
        this.showButton = !this.showButton;
        this.switchTaskTXT = this.showButton ? "Hide List" : "Show List";
      },
      removeTask(idx) {
        this.tasks.splice(idx, 1);
      },
    },
  });
  
  app.mount("#assignment");  
