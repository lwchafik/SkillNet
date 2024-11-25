import { defineStore } from "pinia";

export const useCoursesStore = defineStore('coursesStore', {
  state: () => ({
    courses: [],
    isLoading: false
  }),
  actions: {
    async getCourses() {
      this.isLoading = true
      const res = await fetch('http://localhost:5000/courses')
      const data = await res.json()

      this.courses = data
      this.isLoading = false
    }
  }
})