import { useState } from "react";
import { Layout, Menu, Button, Form, Input, Table, Modal } from "antd";

const { Header, Sider, Content } = Layout;

function Lab1() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  const [dataSource, setDataSource] = useState([
    { key: 1, name: "hoso", email: "hoso1@gmail.com", role: "Admin" },
    { key: 2, name: "hoso1", email: "hoso2@gmail.com", role: "User" },
  ]);

  const handleAdd = (values: any) => {
    setDataSource([...dataSource, { key: dataSource.length + 1, ...values }]);
    form.resetFields();
    setOpen(false);
  };

  return (
    <Layout>
      <Header style={{ color: "#fff", fontWeight: "bold" }}>
        WEB2091 - User Management
      </Header>

      <Layout>
        <Sider width={180}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["users"]}
            items={[
              { key: "users", label: "Users" },
              { key: "settings", label: "Settings" },
            ]}
          />
        </Sider>

        <Content style={{ padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <h3>Danh sách user</h3>
            <Button type="primary" onClick={() => setOpen(true)}>
              Add User
            </Button>
          </div>

          <Table columns={columns} dataSource={dataSource} />

          <Modal
            open={open}
            title="Thêm user mới"
            onCancel={() => setOpen(false)}
            onOk={() => form.submit()}
          >
            <Form form={form} layout="vertical" onFinish={handleAdd}>
              <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                <Input.Password />
              </Form.Item>
              <Form.Item label="Role" name="role" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Lab1;
