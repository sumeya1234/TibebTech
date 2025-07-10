import React from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import Courses from '../../components/Courses/Courses'
import StudentFeedback from '../../components/StudentFeedback/StudentFeedback'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner/>
        <Courses/>
        <StudentFeedback/>
        <WhyChooseUs/>
      </Layout>
    </div>
  )
}

export default Home
