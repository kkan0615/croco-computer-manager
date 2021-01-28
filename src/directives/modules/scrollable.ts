import { DirectiveOptions } from 'vue'

export const directive: DirectiveOptions = {
  bind: (el, binding) => {
    el.style.height = (binding.value && binding.value.height) || '100%'
    el.style.overflow = 'auto'
  }
}

export default directive
