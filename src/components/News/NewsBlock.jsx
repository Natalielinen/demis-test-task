import React from 'react'
import styles from './News.module.css'


const NewsBlock = (props) => {
   
    return (
        <div className = {styles.newsBlock}>
            <p><img src={props.fullImage} alt="rty"/></p>
            <p>{props.fullText}</p>
        </div>
    )
}


export default NewsBlock;
