import Vue from 'vue'

const addDirectives = () => {
  const modules = require.context('./modules', true, /[A-Za-z0-9-_,\s]+\.ts$/i)
  modules.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const name = matched[1]
      Vue.directive(name, modules(key).default)
    }
  })
}

addDirectives()
