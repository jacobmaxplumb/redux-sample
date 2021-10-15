import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { enterEditMode, updateTitleText } from './actions/app.actions';

function App(props) {
  return (
    <div className="App">
      {props.editing ? (
        <div>
          <input value={props.titleText} onChange={(e) => props.updateTitleText(e.target.value)} />
          <button>Submit</button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <button onClick={() => props.enterEditMode()}>Edit</button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title,
    editing: state.editing,
    titleText: state.titleText
  }
}

export default connect(mapStateToProps, {enterEditMode, updateTitleText})(App);
