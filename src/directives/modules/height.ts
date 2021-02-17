import { DirectiveOptions } from 'vue'

export const directive: DirectiveOptions = {
  bind: (el, binding) => {
    el.style.height = binding.value || '100%'
  }
}

export default directive
