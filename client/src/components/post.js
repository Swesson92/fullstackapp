import React, {Component} from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
      
      this.state = {
        author: '',
        headline:'',
        message: ''
      };
    }
    
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    
    handleSubmit = e => {
      e.preventDefault();
    
      const { author, headline, message } = this.state;
    
      const posts = {
        author,
        headline,
        message,
      };
    
      //Post method
      const axios = require('axios');
    
      axios.post('http://localhost:5000/create', posts)
        .catch(err => {
          console.error(err);
        });
    };
    
        render(){
            return(
              <div>
              <br />
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      placeholder="Author"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="headline"
                      placeholder="Headline"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <br />
                  <div className="form-group-message">
                  <textarea cols="100" rows="15" value={this.state.value} onChange={this.handleChange} />
                  </div>
                  <br />
                  <div>
                    <button className="btn btn-success" type="submit">
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
            )
        }
    }

export default Post;