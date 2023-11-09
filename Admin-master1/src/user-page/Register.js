import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ApiUrl } from '../services/ApiUrl';
import '../styles/register.css';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Register = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post(ApiUrl.addUser, values);
            if (response.status === 200) {
                // Handle success, e.g., show a success message or redirect
                message.success('Registration successful. You can now login.');
                navigate('/login');
            } else {
                // Handle error, e.g., show an error message
                message.error('Registration failed. Please check the provided information.');
            }
        } catch (error) {
            // Handle any unexpected errors
            console.error('Error:', error);
        }
    };

    // Custom email format validation function
    const validateEmail = (rule, value, callback) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (value && !emailRegex.test(value)) {
            callback('Invalid email format');
        } else {
            callback();
        }
    };

    return (
        <div className="register">
            <div className="form-register">
                <div className="form-header">
                    <img src={require('../assets/img/1.png')} class="logo" alt="" />
                </div>
                <Form
                    name="register-form"
                    initialValues={{ role: 'User' }}
                    onFinish={onFinish}
                >
                    <div>
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: 'Please enter your username' },
                            ]}
                        >
                            <Input
                                placeholder="Enter username"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Please enter your password' },
                            ]}
                        >
                            <Input.Password
                                placeholder="Enter password"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { validator: validateEmail },
                            ]}
                        >
                            <Input
                                placeholder="Enter email"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div className="tv-role">
                        <Form.Item
                            name="role"
                            initialValue="User"
                        >
                            <Input
                                placeholder="Enter role"
                                prefix={<UserOutlined />}
                                disabled
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="firstName"
                            rules={[
                                { required: true, message: 'Please enter your first name' },
                            ]}
                        >
                            <Input
                                placeholder="Enter first name"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="lastName"
                            rules={[
                                { required: true, message: 'Please enter your last name' },
                            ]}
                        >
                            <Input
                                placeholder="Enter last name"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <p>You already have an account? <a href="/login">Login now</a></p>
                    </div>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-register"
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;
