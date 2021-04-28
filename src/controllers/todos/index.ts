import { Response, Request } from 'express'
import { InterfaceTodo } from './../../types/todo'
import Todo from '../../models/todo'

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: InterfaceTodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<InterfaceTodo, 'name' | 'description' | 'status'>

    const todo: InterfaceTodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    const newTodo: InterfaceTodo = await todo.save()
    const allTodos: InterfaceTodo[] = await Todo.find()

    res
      .status(201)
      .json({ message: 'Todo added', todo: newTodo, todos: allTodos })
  } catch (error) {
    throw error
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: InterfaceTodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allTodos: InterfaceTodo[] = await Todo.find();
    res.status(200).json({
      message: 'Todo updated',
      todo: updateTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: InterfaceTodo | null = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos: InterfaceTodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo }
