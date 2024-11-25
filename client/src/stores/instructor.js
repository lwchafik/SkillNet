import { defineStore } from "pinia";

export const useInstructorStore = defineStore('instructorStore', ({
  state: () => ({
    instructors: []
  }),
  actions: {
    async getInstructors() {
      const res = await fetch('http://localhost:5000/instructors')
      const data = await res.json()

      this.instructors = data;
    }
  }
}))