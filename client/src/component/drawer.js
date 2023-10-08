import React from "react";
import { Button, Drawer, Form, Input, InputNumber, DatePicker } from "antd";

const ItemDrawer = ({ isOpen, isClose, submitForm }) => {
  const { TextArea } = Input;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Drawer
        title="Add New Item"
        placement="right"
        width={600}
        onClose={isClose}
        open={isOpen}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={submitForm}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Required Field!",
              },
            ]}
          >
            <Input placeholder="Apple" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Required Field!",
              },
            ]}
          >
            <Input placeholder="Fruits" />
          </Form.Item>
          <Form.Item label="Quantity" name="quantity">
            <InputNumber placeholder="0" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Required Field!",
              },
            ]}
          >
            <InputNumber placeholder="100" />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Purchase Date" name="purchaseDate">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Expiration Date" name="expDate">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Supplier Name" name="supplierName">
            <Input placeholder="fresho" />
          </Form.Item>
          <Form.Item label="Supplier Contact Info" name="supplierInfo">
            <Input placeholder="fresho@contact.info" />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Required Field!",
              },
            ]}
          >
            <Input placeholder="Grocery Store A" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default ItemDrawer;
