import React, { Component } from 'react'

export default class GifSearch extends Component {

   state = {
      search: ""
   }
  
   handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchGIFs(this.state.search)
   }
  
   render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})} />
          </form>
        </div>
      )
   }
   
}