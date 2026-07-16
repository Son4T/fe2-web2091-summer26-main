import { useState } from "react";
import { Table, Image, Spin, Input } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Lab4() {
  const queryClient = useQueryClient();
  const [keyword, setKeyword] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  // Bài 4: xóa xong tự động cập nhật lại danh sách
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  // Bài 2: xóa truyện
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Mô tả", dataIndex: "description" },
    // Bài 1: cột Created At
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    // Bài 2: cột Action - nút Xóa
    {
      title: "Action",
      render: (_: any, record: any) => (
        <button onClick={() => handleDelete(record.id)}>Xóa</button>
      ),
    },
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  // Bài 5: tìm kiếm theo tên truyện
  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div style={{ padding: 20 }}>
      <h3>Danh sách truyện</h3>

      <Input
        placeholder="Tìm kiếm theo tên truyện"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ maxWidth: 300, marginBottom: 16 }}
      />

      {/* Bài 3: phân trang 5 bản ghi/trang */}
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default Lab4;
