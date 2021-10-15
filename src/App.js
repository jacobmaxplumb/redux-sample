import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { enterEditMode, setTitle, updateTitleText } from './actions/app.actions';
import Contact from './components/Contact';

function App(props) {
  return (
    <div className="App">
      {props.editing ? (
        <div>
          <input value={props.titleText} onChange={(e) => props.updateTitleText(e.target.value)} />
          <button onClick={() => props.setTitle()}>Submit</button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <button onClick={() => props.enterEditMode()}>Edit</button>
        </div>
      )}
      <Contact />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.app.title,
    editing: state.app.editing,
    titleText: state.app.titleText
  }
}

export default connect(mapStateToProps, {enterEditMode, updateTitleText, setTitle})(App);
