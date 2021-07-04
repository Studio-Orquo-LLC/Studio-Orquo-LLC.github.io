class Menu extends React.Component {
    static toggled = false;
    static lastAngle = 0;

    render() {
        if (!Menu.toggled)
            return (
                <>
                </>
            )
        return (
            <>
                <div id="dropdown">
                    <a href="index.html" class="dropoption">Home</a>
                    <a href="about.html" class="dropoption">About</a>
                    <a href="devlogs.html" class="dropoption">Devlogs</a>
                </div>
            </>
        )
    }
}

window.addEventListener("deviceorientation", function (event) {
    var rotateDegrees = event.alpha;
    handleOrientationEvent(rotateDegrees);
}, true);

function handleOrientationEvent(rotateDegrees) {
    if (Math.abs(Menu.lastAngle - rotateDegrees) > 45 && Menu.toggled) {
        Menu.toggled = false;
        Menu.lastAngle = rotateDegrees;
        ReactDOM.render(<Menu />, document.querySelector("#react-dropdown"));
        location.reload();
    }
}



function toggle() {
    Menu.toggled = !Menu.toggled;
    ReactDOM.render(<Menu />, document.querySelector("#react-dropdown"));
}