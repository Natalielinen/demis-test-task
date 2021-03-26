import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

function Home(props) {
    
    let newsList = props.allNews.map(n => <NewsPreview smallImage = {n.fullImage} shortText = {n.fullText.slice(0, n.fullText.length-100 )} key = {n.id} /> )
   
    return (
        <div>
            <h2>Последние новости</h2>
            {newsList.reverse().slice(0, 3)}  
        </div>
    )
}

const NewsPreview = (props) => {
    return <div className = {styles.previewBlock}>
        <div>
            <p className = {styles.imagePlace}><img src={props.smallImage} alt="новость"/></p>
            <p className = {styles.description}>{props.shortText} <NavLink to = "/news">...Читать далее</NavLink> </p>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        allNews: state.newsPage.fullNews
    }
}


export default connect(mapStateToProps)(Home);
