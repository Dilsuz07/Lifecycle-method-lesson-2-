import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            show : true

            // favouriteColor : 'oq'
            // posts: [],
            // loading: true
        }
    }

    getData = () => {
        this.setState({show: false})
    }

    // getData() {
    //     setTimeout(() => {
    //         console.log('Bu ma`lumot yangilanyapti');
    //         this.setState({ data: 'Dilso`z' })
    //     }, 3000)
    // }

    componentDidMount() {
        // this.getData()
        console.log('componentdDidMount');

        // setTimeout(() => {
        //     this.setState({favouriteColor : 'ko`k'})
        // },3000)

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(data => this.setState({posts : data,loading :false}))
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        // document.querySelector('h1').innerHTML = `rang ${this.state.favouriteColor}`
        
    }

    render() {
        let myHeader;
        if(this.state.show) {
            myHeader = <Child />
        }
        return (
            <div>
                {myHeader}
                <button onClick={this.getData}>Delete Header</button>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>Yoqtirgan rang {this.state.favouriteColor}</h1>
    //             {/* {
    //                 this.state.loading ? 
    //                 <h3>Loading ...</h3> :
    //                 <h3>{this.state.posts.length}</h3>
    //             } */}
    //         </div>
    //     )
    // }
}

class Child extends Component {
    componentWillUnmount(){
        alert('Bu componenta o`chadi')
    }
    render() {
        return <h1>Salom</h1>
    }
}

export default App