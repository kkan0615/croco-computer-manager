import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { User } from '@/interfaces/user'

/**
 * User state 관리용 mixins
 */
@Component({
  name: 'UserMixin',
  computed: {
    ...mapGetters('user', [
      'user'
    ])
  }
})
export class UserMixin extends Vue {
  public user!: User
}
