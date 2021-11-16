import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCounterValue} from "../store/actionCreator";

class App extends Component {


    render() {
        return (
            <div className="container">

                <h2>Class used</h2>

                <p>{this.props.counter}</p>
                <button
                    onClick={this.props.addOne}
                    className="btn btn-sm btn-info" >+1</button>

            </div>
        )
    }
}


//метод, который вызывает данные, кот мы хотим получить через обращение к state
const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}


//f for action -> reducer ()
const mapDispatchToProps = (dispatch) => {
    return {
        //f кот попадает в props и запустит dispatch, в кот вернется то, что запущено f в аргументе
        addOne: () => dispatch( addCounterValue() )
    }
}

//f из библиотеки react-redux, кот связывает наш компонент(App) с redux
//2-ой вызов f: f connect, кот принимает в себя аргумент и передает нам new f,
//кот мы можем запустить, передав в нее аргументом компонент Арр
export default connect( mapStateToProps, mapDispatchToProps )(App);