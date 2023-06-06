// stores.ts
import { writable } from 'svelte/store'

export const alert = writable<string>('Welcome To Ahmed bin Majid Robot app!')
// export const todos = localStore<TodoType[]>('mdn-svelte-todo', initialTodos)
export let robot_on : boolean = false;
