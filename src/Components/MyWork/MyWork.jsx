// import React from 'react'
import arrow_icon from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';
import theme_img from '../../assets/theme_img.jpeg';
import './Mywork.css';

const MyWork = () => {
    console.log(mywork_data);
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_img} alt="" />
        </div>
        <div className="mywork-container">
        {mywork_data.map((work, index) => {
          const imgKey = Object.keys(work).find(key => key.includes('w_img'));
          return imgKey ? (
            <img key={index} src={work[imgKey]} alt={work.w_name || 'My Work'} />
          ) : null;
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork