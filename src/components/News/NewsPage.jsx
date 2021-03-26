import React from 'react'
import { connect } from 'react-redux';
import NewsBlock from './NewsBlock';

function NewsPage(props) {

    let newsList = props.allNews.map(n => <NewsBlock fullImage = {n.fullImage} fullText = {n.fullText} key = {n.id} /> )

    return (
        <div>  
            {newsList.reverse()}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        allNews: state.newsPage.fullNews
    }
}


export default connect(mapStateToProps)(NewsPage);
