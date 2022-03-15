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
                    }}>
                        <h1 style={{color:"#FFF", fontSize:"12vw"}}>Welcome</h1>
                </div>
            </Container>
        </>
    )
}

export default ShowHome