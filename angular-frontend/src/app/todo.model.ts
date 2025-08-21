// todo.model.ts
export class Todo {
  constructor(
    public id: number = 0,
    public title: string = '',
    public completed: boolean = false,
    public deadline: string = '', // Format YYYY-MM-DD
    public priority: 'low' | 'medium' | 'high' = 'low' // Priorité
  ) {}
}
