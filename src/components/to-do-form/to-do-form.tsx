import React, { useEffect } from "react";
import { Alert, Button, Form, List, Space, Spin, Typography } from "antd";
import { ToDoProvider } from "../../providers/to-do-provider/index.tsx"; 
import type { IToDoItem } from "../../providers/to-do-provider/context.tsx";

const { Title, Text } = Typography;

export function TodoProviderTest() {
  const state = ToDoProvider.useToDoState();
  const actions = ToDoProvider.useToDoActions();
  const todos = state.toDoItems ?? [];
  const loading = state.isPending ?? false;
  const error = state.isError ?? null;

  useEffect(() => {
    actions.getToDoItems?.();
  }, [actions]);

  const onFinish = () => {
  actions.getToDoItems();
};

  return (
    <Space orientation="vertical" style={{ width: "100%" }} size="large">
      <Title level={3} style={{ margin: 0 }}>
        Todo Provider Test
      </Title>

      <Form layout="inline" onFinish={onFinish}>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Fetch todos
          </Button>
        </Form.Item>
      </Form>

      {error ? (
        <Alert
          type="error"
          showIcon
          title="Failed to load todos"
          description={typeof error === "string" ? error : "Check console / network tab"}
        />
      ) : null}

      <Spin spinning={loading}>
        <List style={{ maxHeight: 400, overflowY: "auto" }} bordered dataSource={Array.isArray(todos) ? todos : []}locale={{ emptyText: "No todos yet (or fetch didn’t run)" }}
        renderItem={(todo: IToDoItem) => (
            <List.Item>
            <Space orientation="vertical" size={0}>
                <Text strong>
                {todo.todo ?? "(missing text)"}
                </Text>
                <Text type="secondary">
                Completed: {String(todo.completed ?? false)}
                </Text>
            </Space>
            </List.Item>
        )}
        />

      </Spin>
    </Space>
  );
}