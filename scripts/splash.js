class Splash extends React.Component {
    static idx = 0;
    static delay = 7000;
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
        var p1 = document.getElementById("progress-1")
        var p2 = document.getElementById("progress-2")
        var p3 = document.getElementById("progress-3")
        p1.style.backgroundColor = "white"
        p2.style.backgroundColor = "white"
        p3.style.backgroundColor = "white"
        switch (Splash.idx) {
            case 0:
                p1.style.backgroundColor = "CornflowerBlue"
                return (
                    
                        <img src="images/testimage.jpg" id="bg" class="splash" key={this.getId()}></img>
                    
                )
            case 1:
                p2.style.backgroundColor = "CornflowerBlue"
                return (
                    <>
                        <img src="images/testimage2.jpg" id="bg" class="splash" key={this.getId()}></img>
                    </>
                )
            case 2:
                p3.style.backgroundColor = "CornflowerBlue"
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

function left() {
    Splash.idx--;
    ReactDOM.render(<Splash />, document.querySelector("#react-splash"))
    window.clearInterval(tid)
    this.tid = window.setTimeout(right, Splash.delay)
}

function right() {
    Splash.idx++;
    ReactDOM.render(<Splash />, document.querySelector("#react-splash"))
    window.clearInterval(tid);
    this.tid = window.setTimeout(right, Splash.delay)
}

let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
const gestureZone = document.getElementById('pictures');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);

function handleGesture(e) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);
    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
            if (x < 0) {
                right()
            } else {
                left()
            }
        }
        // if (xy <= limit) {
        //     if (y < 0) {
        //         console.log("top");
        //     } else {
        //         console.log("bottom");
        //     }
        // }
    } 
    // else {
    //     console.log("tap");
    // }
}