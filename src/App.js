import './App.css';
import { connect } from 'react-redux';
import { anotherName, addWishAction } from './actions/myaction';

function App(props) {
  console.log("App props = ", props);
  return (
    <div className="App">
      <h3>I am from App js</h3>
      <h3>Name : {props.myname}</h3>
      <h4>Wishes : {props.mywishes ? props.mywishes.map(item => {
         // console.log("item=", item);
          return (
              <div>{item}</div>
               )
      }):[]}</h4>
      <button onClick={()=>{
          console.log("btn clicked..!!");
          let name = "honey";
         // name === "honey" ? name="Amrit" : name="honey"; //toggle
          props.changeName(name) //, ['w3', 'w4', 'w5'])
      }}>Change Name</button>

      <button onClick={()=>props.addWish("w5")}>Add wish</button>
    </div>
  );
}

//state of reducer is used as props by this component
const mapStateToProps = (state) => {
  return {
    myname : state.name,
    mywishes : state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //changeName : (name) => { dispatch(anotherName(name)) }
    changeName : () => { dispatch(anotherName()) },
    addWish : (wish) => {dispatch(addWishAction(wish))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
