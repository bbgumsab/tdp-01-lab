function Greeting({name}) {
    const sayHi = (msg) => {
        console.log(`Hi, ${msg}!`);
    };

    // const styleObj = {
    //     background: "red"
    // };

    // This will not work as expected, will show console log even without clicking
    // // return <h1 onClick={sayHi(name)}>Hello, {name}!</h1>;
    return <>
        <h1 onClick={() => sayHi(name)}>Hello, {name}!</h1>
        <h3 style = {{background: "red"}}>Testing</h3>
    </>
}

export default Greeting;