import { Container} from "react-bootstrap"

const ShowHome = () =>{
    return (
        <> 
            <Container fluid className="px-0 text-center">
                <div
                style={{
                    display: "table-cell",
                    verticalAlign: "middle",
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `url("https://images.hdqwalls.com/download/cat-looking-at-butterfly-digital-art-w5-1920x1080.jpg")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                    }}>
                        <h1 style={{color:"#FFF", fontSize:200}}>Welcome</h1>
                </div>
            </Container>
        </>
    )
}

export default ShowHome