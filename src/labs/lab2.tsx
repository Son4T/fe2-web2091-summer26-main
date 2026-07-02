import { Table } from "antd";

function Lab2() {
  const studentColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];
  const studentData = [
    { key: 1, id: 1, name: "Nam", age: 20, major: "IT" },
    { key: 2, id: 2, name: "Linh", age: 21, major: "Business" },
    { key: 3, id: 3, name: "Hà", age: 19, major: "Design" },
  ];

  const productColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Product Name", dataIndex: "productName" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];
  const productData = [
    { key: 1, id: 1, productName: "Áo thun", price: 150000, category: "Thời trang" },
    { key: 2, id: 2, productName: "Quần jean", price: 350000, category: "Thời trang" },
    { key: 3, id: 3, productName: "Giày sneaker", price: 800000, category: "Giày dép" },
    { key: 4, id: 4, productName: "Balo", price: 450000, category: "Phụ kiện" },
    { key: 5, id: 5, productName: "Mũ", price: 90000, category: "Phụ kiện" },
  ];

  const userColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: (value: string) => (
        <span style={{ color: value === "active" ? "green" : "red" }}>{value}</span>
      ),
    },
    {
      title: "Action",
      render: () => (
        <>
          <button style={{ marginRight: 8 }}>Edit</button>
          <button>Delete</button>
        </>
      ),
    },
  ];
  const userData = [
    { key: 1, id: 1, name: "hoso", email: "hoso1@gmail.com", status: "active" },
    { key: 2, id: 2, name: "hoso123", email: "hoso2@gmail.com", status: "inactive" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sinh viên</h2>

      <Table columns={studentColumns} dataSource={studentData} style={{ marginBottom: 30 }} />

      <h3>Danh sách sản phẩm</h3>
      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
        style={{ marginBottom: 30 }}
      />

      <h3>User Management</h3>
      <Table columns={userColumns} dataSource={userData} />
    </div>
  );
}

export default Lab2;
