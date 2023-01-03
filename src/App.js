import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', isTrue: false}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeToEditButton = () => {
    this.setState({isTrue: true})
  }

  changeToSaveButton = () => {
    this.setState({isTrue: false})
  }

  render() {
    const {searchInput, isTrue} = this.state
    return (
      <div className="app-container">
        <div className="text-container">
          <div>
            <h1 className="heading">Editable Text input</h1>

            {isTrue ? (
              <span className="paragraph">{searchInput}</span>
            ) : (
              <input
                type="text"
                className="input"
                value={searchInput}
                onChange={this.changeInput}
              />
            )}

            {isTrue ? (
              <button
                type="button"
                className="button"
                onClick={this.changeToSaveButton}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="button"
                onClick={this.changeToEditButton}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
