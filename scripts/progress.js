class ProgressBar extends React.Component {
    static width = "10vw";
    static value = 0;

    static setValue(newValue) {
        ProgressBar.value = newValue
        console.log(ProgressBar.value)
        ReactDOM.render(<ProgressBar />, document.querySelector("#react-progress"));
    }

    render() {
        return (
            <>
                <div>
                    <div className="progress-div" style={{ width: ProgressBar.width }}>
                        <div style={{ width: `${ProgressBar.value}px` }} className="progress" />
                    </div>
                </div>
            </>
        )
    }
}

ReactDOM.render(<ProgressBar />, document.querySelector("#react-progress"));