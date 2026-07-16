import { Form, Input, InputNumber, Select, Button } from "antd";

function Lab3() {
  // Bài 1: Form đăng nhập
  const onFinishLogin = (values: any) => {
    console.log(values);
  };

  // Bài 2: Form đăng ký người dùng
  const onFinishRegister = (values: any) => {
    console.log(values);
  };

  // Bài 3: Form thêm sản phẩm
  const onFinishProduct = (values: any) => {
    console.log(values);
  };

  // Bài 4: Form thêm bài viết
  const onFinishPost = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      {/* Bài 1 */}
      <h3>Form đăng nhập</h3>
      <Form layout="vertical" onFinish={onFinishLogin} style={{ maxWidth: 400 }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>

      {/* Bài 2 */}
      <h3>Form đăng ký người dùng</h3>
      <Form layout="vertical" onFinish={onFinishRegister} style={{ maxWidth: 400 }}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Vui lòng nhập phone" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập password" },
            { min: 6, message: "Password tối thiểu 6 ký tự" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Vui lòng nhập confirm password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Password không khớp"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>

      {/* Bài 3 */}
      <h3>Form thêm sản phẩm</h3>
      <Form layout="vertical" onFinish={onFinishProduct} style={{ maxWidth: 400 }}>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>

      {/* Bài 4 */}
      <h3>Form thêm bài viết</h3>
      <Form layout="vertical" onFinish={onFinishPost} style={{ maxWidth: 400 }}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select
            placeholder="Chọn category"
            options={[
              { label: "Công nghệ", value: "tech" },
              { label: "Đời sống", value: "life" },
              { label: "Giải trí", value: "entertainment" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Vui lòng nhập slug" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Content" name="content">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm bài viết
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Lab3;
