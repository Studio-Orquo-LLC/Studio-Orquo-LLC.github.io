class Splash extends React.Component {
    static idx = 0;
    static delay = 5000;
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
var tid = window.setTimeout(right, Splash.delay)
var pid = window.setTimeout(progress, Splash.delay / 120)

function progress() {
    ProgressBar.setValue(ProgressBar.value + 1)
    window.clearInterval(pid)
    this.pid = window.setTimeout(progress, Splash.delay / 120)
}

function left() {
    ProgressBar.setValue(0)
    Splash.idx--;
    ReactDOM.render(<Splash />, document.querySelector("#react-splash"))
    window.clearInterval(tid)
    this.tid = window.setTimeout(right, Splash.delay)
}

function right() {
    ProgressBar.setValue(0)
    Splash.idx++;
    ReactDOM.render(<Splash />, document.querySelector("#react-splash"))
    window.clearInterval(tid);
    this.tid = window.setTimeout(right, Splash.delay)
}