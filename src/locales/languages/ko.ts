import { Dictionary } from '@/interfaces/system/lang.ts'

export const dictionary: Dictionary = {
  rule: {
    required: '필수 입력을 확인해 주시기바랍니다. ({target})'
  },
  general: {
    authMenu: {
      profile: '프로필',
      setting: '설정',
      logout: '로그아웃',
    },
    searchBar: {
      label: '(CTRL + /) 키를 눌러 검색'
    },
    languageMenu: {
      language: '언어',
      subTitle: '언어를 선택해주시기 바랍니다.'
    },
  },
  loadingTips: {
    tip1: '상단위의 지구본을 클릭해 언어를 변경 할 수 있습니다.',
    tip2: '눈이 아프시다면 다크모드를 사용할 수 있습니다.',
    tip3: '스트레칭은 혈액순환에 도움을 줍니다.',
    tip4: '안구 운동은 안구 건강에 도움을 줍니다.',
    tip5: '팁은 매번 바뀝니다!'
  },
  snackbar: {
    close: '닫기'
  },
  components: {
    localeList: {
      language: '언어',
    },
    topFilter: {
      search: '검색'
    }
  },
  router:{
    GeneralLayout:{
      title: '기본 레이아웃(삭제 예정)'
    },
    Playground:{
      title: '2분활'
    },
    Playground2:{
      title: '3분활'
    },
    About:{
      title: '소개'
    },
    Example: {
      title: '예제'
    },
    PostExample: {
      title: 'POST 전송 예제'
    },
    DevExample:{
      title: '데브 예제'
    },
    ListWithFormExample: {
      title: '리스트와 입력 예제'
    },
    echartExample: {
      title: 'Echart 예제'
    }
  },
  login: {
    loginForm: {
      idInput: '아이디',
      passwordInput: '패스워드',
      loginButton: '로그인',
      rememberId: '아이디 기억하기'
    }
  },
  test: {
    hello: 'i18n에 오신 것을 환영합니다.',
    request: '요청',
  }
}

export default dictionary
