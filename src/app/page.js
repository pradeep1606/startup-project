// 'use client'

import CollegeHome from "@/components/CollegeHome"
import Carousel from "../components/Carousel"
import CoursesHome from "@/components/CoursesHome"
import HomeStrip from "@/components/HomeStrip"

const page = () => {
  return (
    <>
      <Carousel />
      <CoursesHome />
      <CollegeHome />
      <HomeStrip />
    </>
  )
}

export default page
