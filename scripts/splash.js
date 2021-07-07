class Splash extends React.Component {
    static idx = 0;
    getId = () => {
        const id = shortid.generate();
        console.log(id);
        return id;
    };
    render() {
        if (Splash.idx < 0) {
            Splash.idx = 2;
        } else if (Splash.idx > 2) {
            Splash.idx = 0;
        }
        switch (Splash.idx) {
            case 0:
                return (
                    
                        <img src="images/testimage.jpg" id="bg" class="splash" key={this.getId()}></img>
                    
                )
            case 1:
                return (
                    <>
                        <img src="images/testimage2.jpg" id="bg" class="splash" key={this.getId()}></img>
                    </>
                )
            case 2:
                return (
                    <>
                        <img src="images/testimage3.jpg" id="bg" class="splash" key={this.getId()}></img>
                    </>
                )
        }
    }
}

ReactDOM.render(<Splash />, document.querySelector("#react-splash"));
window.setTimeout(right, 5000);

function left() {
    Splash.idx--;
    ReactDOM.render(<Splash />, document.querySelector("#react-splash"));
    window.setTimeout(right, 10000);
}

function right() {
    Splash.idx++;
    ReactDOM.render(<Splash />, document.querySelector("#react-splash"));
    window.setTimeout(right, 10000);
}