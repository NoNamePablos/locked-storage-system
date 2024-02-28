export interface IBreadcrumb {
  path: string
  breadcrumbName: string
  children?: IBreadcrumbRoute[]
}

export interface IBreadcrumbRoute {
  path: string
  breadcrumbName: string
}
