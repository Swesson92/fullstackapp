import React, {Component} from 'react';


class Archive extends Component {
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

  axios
    .post('http://localhost:5000/create', book)
    .then(() => console.log('Book Created'))
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
              <div style={{ width: '30%' }} className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  placeholder="Author"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div style={{ width: '30%' }} className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="headline"
                  placeholder="Headline"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div style={{ width: '30%' }} className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <div style={{ width: '30%' }}>
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

export default Archive;