import UserStore from './userStore'
import ArticlesStore from './articlesStore'
import ArticleStore from './articleStore'
import ProfileStore from './profileStore'

const store = () => ({
  userStore: new UserStore(),
  articlesStore: new ArticlesStore(),
  articleStore: new ArticleStore(),
  profileStore: new ProfileStore()
})

export default store

export const getState = (store) => {
  const state = {}
  Object.keys(store).forEach(key => {
    state[key] = store[key].store
  })
  return state
}

export const setState = (store, state) => {
  Object.keys(store).forEach(key => {
    store[key].init(state[key])
  })
}
