import { Row, Col, Typography } from "antd";

export function Title({ text }: { text: string }) {
  return (
    <Row justify="center" style={{ padding: "20px" }}>
      <Col span={18} style={{ textAlign: "center", padding: "20px 20px 0px" }}>
        <Typography.Title>{text}</Typography.Title>
      </Col>
    </Row>
  );
}
