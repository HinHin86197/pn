import Images from "Constants/Images";
import { Col, Row } from "antd";

const arrPhotos = [
  { id: 1, uri: Images.p1 },
  { id: 2, uri: Images.p2 },
  { id: 3, uri: Images.p3 },
  { id: 4, uri: Images.p4 },
  { id: 5, uri: Images.p5 },
  { id: 6, uri: Images.p6 },
  { id: 7, uri: Images.p7 },
];

const AllPhotos = () => {
  return (
    <div style={styles.wrap}>
      <Row gutter={[12, 12]}>
        {arrPhotos.map((item) => (
          <Col span={6}>
            <div style={styles.style}>
              <img
                alt={item.uri}
                src={item.uri}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  wrap: {
    padding: 12,
  },
  style: {
    background: "#0092ff",
    height: "calc((100vh - 36px) / 2)",
    borderRadius: 10,
    position: "relative",
    overflow: "hidden",
  },
};

export default AllPhotos;
