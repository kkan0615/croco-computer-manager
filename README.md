# Overview
Vue 2.0 + Typescript 으로 만든 UVC Framework 입니다.

# Version
| Node | Vue | Scss |
| --- | --- | --- |
| 14.0 | 2.0 | 5.0 |

# Setup
## Project setup
```
# 프로젝트를 clone하고 사용
npm install
```

### Compiles and hot-reloads for development
```
# 개발환경으로 시작할 때 사용, start는 백엔드와 비슷하게 맞추기 위해 사용 중임.
npm run serve
### OR ###
npm run start 
```

### Compiles and minifies for production
```
# 프로젝트를 배포할 때 사용
npm run build
```

### Lints and fixes files

모든 lint 에러를 수정 할 때 사용
```
npm run lint
```

Visual Code 확장 프로그램 'vue', 'ESlint', 'Prettier' 설치
```
vue - Vue를 읽기 쉽게 만들어 줌
ESlint - 문법 에러나 오타 버그 등을 찾아 줌
Prettier - 코딩 스타일을 통일 시켜줌 (세미콜론 유무 여부 등)
```

코딩 스타일을 통일 시켜줌 (세미콜론 유무 여부 등)
F1을 눌러 'prettier' 를 검색하여 세팅 파일을 열고나서 다음과 같이 세팅
```
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```
*lint, prettier 설정의 변경이 필요 할 경우 논의 후 변경*


# Structure
```
├── build                           # js로 변환된 파일 (ts파일이 변환된 결과 파일) 디렉토리
│   └── ...                         # 하위 구조는 'src'와 동일하다. (운영 모드에서 실제 사용되는 파일)
├── node_modules
│   └── ...
├── src                             # 주로 자료 보관함
│   ├── assets                      # 정적파일 서비스 공간 (image, css등)
│   │   └── ...
│   ├── components                  # 각종 component 디텍토리
│   │   └── ...             
│   ├── directives                  # directive 디렉토리
│   │   ├── index.ts                # vuex 인덱스 파일
│   │   └── modules                 # directive를 추가적으로 정의하는 폴더
│   ├── interfaces                  # Interface / Type / Enum / Class / Default variables 등 들어감
│   │   ├── system                  # System을 관통하는 타입들이 들어가는 공간
│   │   ├── dbo                     # database에 컬럼으로 정의된 타입들이 들어가는 디렉토리(최대한 db의 column과 맞춤)
│   │   └── ...
│   ├── layouts                     # 전역에서 사용 할 레이아웃을 관리하는 디텍토리
│   │   └── ...
│   ├── locales                     # 언어 관련 설정을 관리하는 디텍토리
│   │   ├── i18n.ts                 # i18n, 언어관련 인덱스 파일
│   │   └── language                # 언어 사전을 정의해두는 디텍토리
│   │       └── ...
│   ├── mixins                      # mixins 파일들이 들어가는 디텍토리
│   │   └── ...
│   ├── plugins                     # 플러그인 관련 파일들이 들어가는 디렉토리 (파일 생성 후 main.ts 와 직접연결필요)
│   │   └── ...
│   ├── router                      # 라우터 관련 정의 디텍토리
│   │   ├── index.ts                # 라우터 인덱스 파일
│   │   └── modules                 # 라우터를 추가적으로 정의하는 폴더
│   ├── scss                        # vuetify 의 변수를 변경 할때 사용 하는 공간
│   │   └── variables.scss          # vuetify 의 변수를 변경 할때 코드를 넣는 공간
│   ├── store                       # vuex 관련 파일들이 들어가는 공간
│   │   ├── index.ts                # vuex 인덱스 파일
│   │   ├── modules                 # vuex를 추가적으로 정의하는 폴더
│   ├── utils                       # 우리가 직접 만드는 여러가지 라이브러리 및 함수 디렉토리
│   │   ├── locale.ts               # 언어팩, 지역 관련 파일
│   │   ├── moment.ts               # 시간, moment library 관련 파일
│   │   └── theme.ts                # 테마 관련 파일
│   ├── styles                      # 스타일 (css or scss) 파일들이 들어가는 공간
│   │   ├── index.scss              # 모든 스타일을 제어하는 곳
│   │   └── vuetify.scss            # Vuetify의 스타일을 scss로 관리할 때 사용하는 파일
│   ├── views                       # 페이지 뷰들 디텍토리
│   │   └── ...
│   └── registerServiceWorker.ts    # PWA와 관련된 파일 (아직은 건들지 X)
│   └── main.ts                     # index 파일 (서버 최초 실행 파일)
├── .env                            # 환경설정 파일
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── babel.config.js                # babel 관련 설정 파일
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vue.config.js                   # vue 관련 설정 들이 들어감, webpack과는 다르지만 사용법이 비슷함
```

# Naming Rules
1. 인터페이스: 대문자 시작, PascalCase
2. 일반 변수/함수: 소문자 시작, camelCase
3. Vue 파일명: PascalCase
4. html에서 컴포넌트사용: kebab-case
5. Type / Class / Interface / Enum: 대문자 시작, PascalCase
6. index.vue가 바로 있는 폴더명: 대문자로 시작, PascalCase

# Store (Vuex)
## 기능 및 설명
```
State: 주로 변수들 관리하는 곳
Getters: 변수들에 접근할 수 있는 곳(최대한 이곳을 활용하되 변수를 사용해도 무방함)
Mutations: 변수들에 접근 할 수 있는 함수들을 모아두는 곳 -> 비동기로 작동
Actions: 동기로 작동하는 함수를 모아두는곳,  state을 변경 할 경우, mutation을 통해서 변경하기
            => 동기로 작동하기 때문에 then/catch 혹은 async/await를 사용하기
```

# Router
```
Router에 등록하면 자동적으로 sideBar에 메뉴가 생김.
name을 적은 뒤에 i18n에 해당 내용을 꼭 적을 것.
meta정보는 필수 값이며 만약 숨기고 싶은 메뉴일 경우 hidden을 사용한다.
모든 router는 module별로 나눠서 관리하며 유일하게 module에 들어가지 않는 최상위 '/' 는 Home이다. 
```

# Interfaces
모든 interfaces / type / class / enum / default value 들은 interfaces 폴더 안에 저장한다.
## 만들어진 폴더 설명
```
system: system 관련 정보들이 들어감 
extend: vuetify 혹은 system등에 들어가지 않으나, library에 적용해야하는 것들이 들어감
dbo: database에 들어간 column 명들을 동일하게 만들며 저장하는 공간
vuetify: vuetify들에 대한 추가 설정들이 들어간다.

## 그밖의 데이터는 폴더를 모을 수 있는 경우 모으거나 따로 단일 파일로 관리한다.
```

# i18n 작성 요령
* 소문자로시작 (camelCase), 단 router 관련은 PascalCase (router의 name이 PascalCase이기 때문)
* 작성시 페이지명 혹은 컴포넌트와 동일하게 하기
* modules 파일 파일명에 따라 언어를 쓸수 있게 제작
```
ko: korean
en: english
```

# Directive
Ref(Vue2 version): https://vuejs.org/v2/guide/custom-directive.html
## 코드 작성법
```
import { DirectiveOptions } from 'vue'

export const directive: DirectiveOptions = {
  bind: (el, binding) => {
    el.style.height = (binding.value && binding.value.height) || '100%'
    el.style.overflow = 'auto'
  }
}

# 중요 단순 export가 아닌 default 키워드가 같이 불어야한다.
# 안붙을경우 자동 global import가 되지 않는다.
export default directive
```

## 사용법
```
# v-파일명 으로 사용가능하다. 파일명에는 v가 붙지 않으나 글로벌 옵션추가시 자동 추가가 되기 때문이다.
<v-card-text
    v-scrollable="{height: '94%'}" # height는 value로 추가 옵션이다
    class="pa-1"
/>
```

# Component 작성 요령
## 필수 사항
```
# class based compoennt로 작성한다. (functional component X)
# name을 무조건 작성하며, Pascalcase로 작성한다.
@Component({
  name: 'ListWithFormExample'
})
export default class ListWithFormExample extends Vue
```
## component의 component 작성
```
# class based compoennt로 작성한다. (functional component X)
# name을 무조건 작성하며, Pascalcase로 작성한다.
# 만약 파일 명이 List라면 ListListWithFormExample이 된다. 즉 compoent명 + router full path들의 name을 붙여서 작성한다.
@Component({
  name: 'ListListWithFormExample'
})
export default class ListListWithFormExample extends Vue
```

# Utils
개발의 생산성과 중복을 막기위해 사용하는 폴더 back의 lib 폴더와 비슷한 역할을 한다.
개발자들은 기능을 추가할 때 주석을 잘 달아두어 다른 개발자가 손쉽게 사용 할 수 있게 해둔다.
## 기능 종류
```
locale.ts: 언어 관련된 기능
momemnt.ts: moment(time)과 관련된 기능
theme.ts: 현재 테마를 관련된 기능
```
## Comment(주석) 작성법
### 주의 사항
param이나 return과 같이 없는 경우에는 적지 않도록 한다.
### function 작성법
```
/**
 * Set the locale to local storage => Description 즉 이 함수에 대한 주석이다 
 * @param locale - selected locale => parameter로 들어가는 내용을 적는다. 여러개 일경우 (@params 로 ㅂㄴ경)
 * @return current language - Ex) ko, en => Return될때 나오는 내용을 적는다.
 */
```

# Interfaces
주로 interface / class / type / enum / default value 등 type 혹은 variables(변수)에 대한 데이터를 정의하는 공간이다. Uitls와
동일하게 주석을 잘 달아두어야한다.

## 디텍토리 생성 및 사용 기준
```
system: 시스템과 관련된 것들
dbo: 데이터베이스와 관련된 것들
```

# Github
Must be written by the English
영어로 작성하기 바람, 영어로 몰라도 최대한 작성
## Commit Convention
### Example 
```
:zap: Feat(lang): add japanese language service
:hammer: Fix: fix broken logic
:memo: Doc: add some comments
:art: Style: add height 100% class
:factory: Refactor: change code style of number input in components
```
### Ref
en: https://www.conventionalcommits.org/en/v1.0.0/ <br>
ko: https://www.conventionalcommits.org/ko/v1.0.0/

# In the future
* Loading / Confirm Components and make it to plugin [until 01.29.2021]
* Login / logout logic
* 404 not found and permission error page
* Language flag svg icon
* Move some input components from jsp project
* Create router vuex module
* List 컴포넌트화 시키기
* Axios 설정
* TopFilter 구조화
* List view 구조화 + 예제
* Calendar
* 상단 검색창
* Home 화면 (dashboard 처럼)
* echart 적용
