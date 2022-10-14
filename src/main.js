import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null;

function render() {
  instance = new Vue({
    render: h => h(App),
  }).$mount('#app')
}

export async function bootstrap() {
  console.log('vue子应用bootstrap');
}
export async function mount(props) {
  console.log('vue子应用mount', props);
  render()
}
export async function unmount(props) {
  console.log('vue子应用卸载', props);
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  props.list = null
}
