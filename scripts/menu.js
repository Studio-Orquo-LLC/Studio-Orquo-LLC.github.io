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

function toggle() {
    Menu.toggled = !Menu.toggled;
    ReactDOM.render(<Menu />, document.querySelector("#react-dropdown"));
}