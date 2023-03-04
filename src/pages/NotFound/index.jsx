import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <Result
      status="404"
      title="404 NotFound"
      subTitle="Xin lỗi, Trang web bạn đang tìm kiếm không tồn tại."
      extra={
        <NavLink to="/home">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary">Quay lại trang chủ</Button>
          </div>
        </NavLink>
      }
    />
  );
}
export default NotFound;
