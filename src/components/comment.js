import { Card, Col } from "react-bootstrap"

export const ShowComment = ({commentList}) => {
    var num = 0
    return (
        commentList.map(text => {
            num++
            return (
                <Col key={num-1} md={12} style={{ marginTop: 20 }}>
                    <Card>
                        <Card.Header style={{backgroundColor:"#637fad", color: "#FFF", fontWeight: "bold", fontSize: "medium"}}>
                            Comment: {num}
                        </Card.Header>
                        <Card.Body>
                            {text}
                        </Card.Body>
                    </Card>
                </Col>
            )

        })
    )
}