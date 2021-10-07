
import axios from 'axios';
const state = {
    user: null,
    posts: null,
};

const ENDPOINT_PATH = "http://localhost:4000/api/usuario-login";
const actions = {
    async Register({dispatch}, form) {
        await axios.post('Usuarios', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('Login', UserForm)
      },
      async LogIn({commit}, User) {
        //console.log('hola');
    
        //await axios.post('login', User)
        //await axios.post(ENDPOINT_PATH, User)
        const  response= await axios.post(ENDPOINT_PATH, User)
        //console.log(response.data);  
     
        await commit('setUser',response)
            return response
      },
   
      async LogOut({commit}){
        let user = null
        commit('logout', user)
      }
};
const mutations = {
    setUser(state, username){
        state.user = username
    },
    setPosts(state, posts){
        state.posts = posts
    },
    LogOut(state){
        state.user = null
        state.posts = null
        state.isLoggedIn = false
    },
};

const getters = {
    isAuthenticated: state => !!state.user,    
    StatePosts: state => state.posts,
    StateUser: state => state.user,
};
export default {
  state,
  getters,
  actions,
  mutations
};