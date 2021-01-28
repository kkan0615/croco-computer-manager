import { RouteConfigMultipleViews, RouteConfigSingleView } from 'vue-router/types/router'

export interface MetaData {
  icon?: string
  hidden?: boolean
}

interface ExtendedRouteConfigSingleView extends RouteConfigSingleView {
  meta: MetaData
  children?: Array<ExtendedRouteConfig>
}

//정산팩에 있는 router의 구조를 가져오면서 따라온 interface, 사실 존재 의미를 모르겠음.
interface ExtendedRouteConfigMultipleViews extends RouteConfigMultipleViews {
  meta: MetaData
  children?: Array<ExtendedRouteConfig>
}

export type ExtendedRouteConfig = ExtendedRouteConfigMultipleViews | ExtendedRouteConfigSingleView
