import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <>
      <Main/>
      <Row title='Em breve' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Em alta' fetchURL={requests.requestTrending}/>
      <Row title='Mais votados' fetchURL={requests.requestUpcoming}/>
      <Row title='Terror' fetchURL={requests.requestHorror}/>
    </>
  )
}

export default Home