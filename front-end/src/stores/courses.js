import { defineStore } from "pinia";

export const useCoursesStore = defineStore('coursesStore', {
  state: () => ({
    courses: [],
    isLoading: false
  }),
  actions: {
    async getCourses() {
      this.isLoading = true
      const res = await fetch('https://skillnet-server.vercel.app/courses')
      const data = await res.json()

      this.courses = data
      this.isLoading = false
    }
  }
})
