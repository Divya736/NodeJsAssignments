
import './App.css';
import {Button, Form,Select,Space,Card,Row,Col} from "antd";
import { useState } from 'react';
import FormItem from 'antd/es/form/FormItem';
function App() {
  const onFinish =(e)=>{
    console.log("task created successfully")
  }
  const onFinishFailed = (errorInfo) => {

    console.log("Failed:", errorInfo);
    
     };
  const[selectedOption,setSelectedOption]=useState("project names")
 const handleChange=(value)=>{
   setSelectedOption(value);
 }
  return (
    <Row gutter={16}>
    <Col span={8}>

</Col>

 <Col span={8}>
    <Card title="Task Creation" bordered={false} style={{ width: 650, backgroundColor:"#b6d8f4" }}>
       <div >
       <Form  onFinish={onFinish} name="basic"labelCol={{ span: 8 }}wrapperCol={{ span: 16 }}style={{ maxWidth: 600}}
     initialValues={{ remember: true }}onFinishFailed={onFinishFailed}autoComplete="off">
     <Form.Item label="Project Names"name="Select">
       <Select defaultValue={selectedOption}
       onChange={handleChange}>
<option value="Invoice Planner">Invoice Planner</option>
<option value="Global Tech Business">Global Tech Business</option>
<option value="Ticket Monitor">Ticket Monitor</option>
<option value="Horizon Max">Horizon Max</option>
<option value="Vault Secure Planner">Vault Secure Planner</option>
       </Select>
       </Form.Item>
      
       <Form.Item label="TaskTitle"name="TaskTitle">
         <input placeholder="TaskTitle"required></input>
     </Form.Item>
     <Form.Item label="TaskDescription"name="TaskDescription">
         <input  placeholder="TaskDescription"required></input>
     </Form.Item>
     <Form.Item >
       <Space wrap>
       <Button type='primary'htmlType='submit'>OK</Button>
       </Space>
     </Form.Item>
       </Form>
       </div>
    </Card>
    </Col>
    </Row>
  );
}

export default App;
