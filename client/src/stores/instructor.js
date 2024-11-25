import { defineStore } from "pinia";

export const useInstructorStore = defineStore('instructorStore', ({
  state: () => ({
    instructors: []
  }),
  actions: {
    async getInstructors() {
      const res = await fetch('https://skillnet-server.onrender.com/instructors')
      const data = await res.json()

      this.instructors = data;
    }
  }
}))
