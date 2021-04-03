import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Spin } from "antd";
import countries from "../../storage/countries.json";
import { useData } from "../../contexts/DataContext";
import "./AddUserForm.css";

const AddUserForm = () => {
  const [isPhoneRequired, setIsPhoneRequired] = useState(false);
  const [isEmailRequired, setIsEmailRequired] = useState(false);
  const [dobStr, setDobStr] = useState(null);

  const { addUser, formSubmitting } = useData();

  const [form] = Form.useForm();

  const handleDobChange = (date, dateStr) => {
    setDobStr(dateStr);
  };

  const handleContactChange = val => {
    if (val === "phone") {
      setIsPhoneRequired(true);
      setIsEmailRequired(false);
      return;
    }

    if (val === "email") {
      setIsPhoneRequired(false);
      setIsEmailRequired(true);
      return;
    }

    setIsPhoneRequired(false);
    setIsEmailRequired(false);
  };

  const handleFormSubmit = values => {
    values.dob = dobStr;
    addUser(values);
    form.resetFields();
  };

  return (
    <div className="add-user-form-container">
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={handleFormSubmit}
        form={form}
      >
        <Form.Item
          name="name"
          label="Name"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please enter name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please select gender",
            },
          ]}
        >
          <Select placeholder="Select Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          labelAlign="left"
          rules={[
            {
              required: isPhoneRequired,
              message: "Please enter phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          labelAlign="left"
          rules={[
            {
              required: isEmailRequired,
              message: "Please enter email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please enter address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="nationality"
          label="Nationality"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please select nationality",
            },
          ]}
        >
          <Select placeholder="Select Nationality" showSearch={true}>
            {countries.map(country => (
              <Select.Option key={country.num_code} value={country.nationality}>
                {country.nationality}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please select date of birth",
            },
          ]}
        >
          <DatePicker
            onChange={handleDobChange}
            placeholder="Select date of birth"
          />
        </Form.Item>

        <Form.Item
          name="educationBackground"
          label="Education Backgroun"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please select education background",
            },
          ]}
        >
          <Select placeholder="Select education background">
            <Select.Option value="Ph.D">Ph.D</Select.Option>
            <Select.Option value="Masters">Masters</Select.Option>
            <Select.Option value="Bachelors">Bachelors</Select.Option>
            <Select.Option value="Higher Secondary">
              Higher Secondary
            </Select.Option>
            <Select.Option value="Secondary">Secondary</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="modeOfContact"
          label="Preferred Mode of Contact"
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please select preferred mode of contact",
            },
          ]}
        >
          <Select
            placeholder="Select education background"
            onChange={handleContactChange}
          >
            <Select.Option value="phone">Phone </Select.Option>
            <Select.Option value="email">Email</Select.Option>
            <Select.Option value="none">None</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 18,
            span: 12,
          }}
        >
          <Button shape="round" htmlType="submit">
            {formSubmitting ? (
              <>
                Submitting
                <Spin />
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUserForm;
