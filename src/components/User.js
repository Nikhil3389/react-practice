function User(props){
    const data ="Nikhil"
    return(
        <div>

            <h1>Hello User</h1>
            <button onClick={props.alert(data)}>Click</button>
        </div>

    )
}
export default User