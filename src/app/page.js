'use client'

import CollegeHome from "@/components/CollegeHome"
import Carousel from "../components/Carousel"
import CoursesHome from "@/components/CoursesHome"

const page = () => {
  return (
    <>
      <Carousel />
      <CoursesHome />
      <CollegeHome />
    </>
  )
}

export default page
