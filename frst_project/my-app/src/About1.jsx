function About1() {
    const name = "Welcome to About page";
    const cars = ["BMW", "Audi", "Benz"];
    const style1 = {color:'yellow', backgroundColor:'black' }
    return (
        <>
            <div>
                <p style={style1}>{name}</p>
                {
                    cars.map(item => (
                        <p>{item}</p>
                    ))
                }
            </div>
        </>
    )

}
export default About1;
