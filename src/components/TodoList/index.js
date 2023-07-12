import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actione";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoListSelector } from "../../redux/selector";

import { searchFilter } from "../../redux/selector";
export default function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector(todoListSelector); // lay ra tu kho chung
  // const filterSearch = useSelector(searchFilter);
  console.log(todoList);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4,
        name: name,
        priority: priority,
        complete: false,
      })
    );
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePriority = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo name={todo.name} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={name} onChange={handleChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
