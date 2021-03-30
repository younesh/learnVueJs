import Vue from 'vue';
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        stateTodos: [],
        ApiUrl: "http://localhost:5151/todos/"
    },
    mutations: { // modifier les stats !! 
        GET_TODOS(state, dataTodos) {
            state.stateTodos = dataTodos;
        },
        ADD_TODOS(state, dataTodos) {
            state.stateTodos.push(dataTodos);
        },
        DELETE_TODOS(state, dataTodos) {
            state.stateTodos = state.stateTodos.filter((itemTodo) => itemTodo.id !== dataTodos.id)
        },
        UPDATE_TODOS(state, dataTodos) {
            console.log("UPDATE_TODOS , dataTodos >>", dataTodos);
            // state.stateTodos = state.stateTodos.map(itemTodo => { if (itemTodo.id == dataTodos.id) return dataTodos })
            /* state.stateTodos.forEach((itemTodo, index) => {
                 console.log("UPDATE_TODOS >> i =  " + index + " | itemTodo.title = " + itemTodo.title);
             })*/
        }
    },
    actions: { // aysnchrone function, commit mutation !!
        getTodos(context) {
            axios.get(context.state.ApiUrl)
                .then(res => {
                    context.commit("GET_TODOS", res.data);
                })
                .catch(err => console.log(err))
        },
        addTodo(context, newTodo) {
            axios.post(context.state.ApiUrl, newTodo)
                .then(postedTodo => {
                    context.commit("ADD_TODOS", postedTodo.data)
                })
        },
        deleteTodo(context, deletedTodo) {
            axios.delete(context.state.ApiUrl + deletedTodo.id)
                .then(() => {
                    context.commit("DELETE_TODOS", deletedTodo)
                })
        },
        updateTodo(context, updatedTodo) {
            axios.put(context.state.ApiUrl + updatedTodo.id, updatedTodo)
                .then((todoPost) => {
                    console.log(`le status de la tache (${todoPost.data.id}: ${todoPost.data.title}) est changé a ${todoPost.data.completed}`);
                    context.commit("UPDATE_TODOS", todoPost.data);
                })
        }
    },
    getters: {
        allTodo(state) {
            return state.stateTodos;
        },
        getTodoById: state => (id) => {
            return state.stateTodos.find((todo) => todo.id === id)
        }
    },
    modules: {}
});