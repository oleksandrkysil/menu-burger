import React, {Component} from 'react'
import classes from './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'


const links = [
    1, 2, 3
]

class Drawer extends Component {



    constructor() {
        super();

        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        // console.log(this.state.height);

        window.addEventListener("resize", this.updateDimensions);


    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });


    }

    renderLinks() {
        return links.map((link, index) => {
            return(
                <li key={index}>
                    <a href="/bla.html">Link {link}</a>
                </li>
            )
        })
    }

    render() {

        const fakeVariable1 = [classes.Drawer]
        console.log(fakeVariable1)


        const cls = ['drawer']

        if(!this.props.isOpen){
            cls.push('drawer-close')
        }

        // const menuNavWidth = document.getElementById('menu-list').innerWidth;
        // console.log(menuNavWidth);


        // if(this.state.width < menuNavWidth) {
        //     this.toggleMenuHandler
        // }



        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul id="menu-list">
                        { this.renderLinks() }
                    </ul>
                    <h3>
                        Window width: {this.state.width} and height: {this.state.height}
                    </h3>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }

            </React.Fragment>
        )
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);

    }
}
export default Drawer