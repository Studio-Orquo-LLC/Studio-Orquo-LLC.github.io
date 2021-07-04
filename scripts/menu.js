class Menu extends React.Component {
    static toggled = false;

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
    if (rotateDegrees == 90 && Menu.toggled) {
        Menu.toggled = false;
        location.reload();
    }
}



function toggle() {
    Menu.toggled = !Menu.toggled;
    ReactDOM.render(<Menu />, document.querySelector("#react-dropdown"));
}