import { Form, Input, Button, Checkbox, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface Category {
  title: string;
  description: string;
  active: boolean;
}

function Lab5() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: Category) => {
      const res = await axios.post("http://localhost:3000/categories", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Thêm danh mục thành công");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: Category) => {
    mutation.mutate(values);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Thêm danh mục truyện</h3>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Nhập title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Active" name="active" valuePropName="checked">
          <Checkbox />
        </Form.Item>

        <Form.Item label="Danh mục cha (nếu có)" name="parentCategory">
          <Select
            placeholder="Chọn danh mục"
            options={categories?.map((item: any) => ({
              value: item.id,
              label: item.title,
            }))}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Thêm danh mục
        </Button>
      </Form>
    </div>
  );
}

export default Lab5;
