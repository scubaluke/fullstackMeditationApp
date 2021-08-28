import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

export default function Home({ match }) {
  const [content, setContent] = useState([])

      useEffect(() => {
          const fetchData = async () => {
            const { data } = await axios.get(`/api/content/${match.url.substring(1)}`)

            setContent(data)
          }
        fetchData()
    
      }, [match])

         const renderPage = content.map((mantra, i) => {
              return <div key={i} style={{backgroundImage: `url(${mantra.img})`}} >
                      {mantra.pageTitle && <h1 className="box-title">{mantra.pageTitle}</h1>}
                      {mantra.subTitle && <h2 className='sub-title' >{mantra.subTitle}</h2>}
                      {mantra.directions && <div className='directions-container'><h1 className='directions' >{mantra.directions}</h1></div>}
                      {mantra.mantra && <h1 className='mantra' >{mantra.mantra}</h1>}
                    </div>
              })    



    return (
        <AwesomeSlider cssModule={[CoreStyles, AnimationStyles]} animation="foldOutAnimation" >
            {renderPage}
        </AwesomeSlider>
    )
}
