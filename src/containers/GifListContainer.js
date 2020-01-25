import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

   state = {
      gifs: []
   }

   componentDidMount() {
     this.fetchGifs()
   }

   fetchGifs = () => {
      const url = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Vo368AVB7btrix7iQAVZmpqUTaGJC3xn&rating=g'
      fetch(url)
      .then(resp => resp.json())
      .then((gifJSON) => {
         this.setState({
            gifs: gifJSON.data.map(gif => gif.images.original.url)
         })
      })
   }

   
   
   render() {
      return(
         <div>
           <GifSearch fetchGifs={this.fetchGifs} />
           <GifList gifs={this.state.gifs} />
         </div>
      )
   }
}