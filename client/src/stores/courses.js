import { defineStore } from "pinia";

export const useCoursesStore = defineStore('coursesStore', {
  state: () => ({
    courses: [],
    isLoading: false
  }),
  actions: {
    async getCourses() {
      this.isLoading = true
      const res = await fetch('https://skillnet-server.onrender.com/courses')
      const data = await res.json()

      this.courses = data
      this.isLoading = false
    }
  }
})
