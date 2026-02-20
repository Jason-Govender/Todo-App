import { useCallback, useEffect } from "react";
import { Alert, Button, List, Space, Spin, Typography } from "antd";
import { ToDoProvider } from "../../providers/to-do-provider/index.tsx";
import type { IToDoItem } from "../../providers/to-do-provider/context.tsx";

const { Title, Text } = Typography;

export function TodoProviderTest() {
  const { toDoItems = [], isPending = false, isError = null } =
    ToDoProvider.useToDoState();
  const { getToDoItems } = ToDoProvider.useToDoActions();

  const fetchTodos = useCallback(() => {
    getToDoItems();
  }, [getToDoItems]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const errorMessage =
    typeof isError === "string" ? isError : isError ? "Check console / network tab" : null;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
          <Title level={3} style={{ margin: 0 }}>
            Todo List
          </Title>

          <Button type="primary" onClick={fetchTodos} loading={isPending}>
            Fetch todos
          </Button>
        </Space>

        {errorMessage && (
          <Alert
            type="error"
            showIcon
            message="Failed to load todos"
            description={errorMessage}
          />
        )}

        <Spin spinning={isPending}>
          <List
            bordered
            style={{ maxHeight: 400, overflowY: "auto" }}
            dataSource={toDoItems}
            locale={{ emptyText: "No todos yet" }}
            renderItem={(todo: IToDoItem) => (
              <List.Item>
                <Space direction="vertical" size={0}>
                  <Text strong>{todo.todo || "(missing text)"}</Text>
                  <Text type="secondary">
                    Completed: {todo.completed ? "Yes" : "No"}
                  </Text>
                </Space>
              </List.Item>
            )}
          />
        </Spin>
      </Space>
    </div>
  );
}