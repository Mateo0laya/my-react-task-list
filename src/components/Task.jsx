export const Task = (props) => {

    const { description} = props;

    return (
        <>
            <input type="checkbox" id="task" name="task" value="Task"></input>
            <label for="task">{ description }</label><br></br>
        </>
    )
}