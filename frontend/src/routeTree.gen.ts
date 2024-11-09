/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const TypesIndexLazyImport = createFileRoute('/types/')()
const TransmissionsIndexLazyImport = createFileRoute('/transmissions/')()
const ModelsIndexLazyImport = createFileRoute('/models/')()
const ManufacturesIndexLazyImport = createFileRoute('/manufactures/')()
const CarsIndexLazyImport = createFileRoute('/cars/')()
const TypesCreateLazyImport = createFileRoute('/types/create')()
const TypesIdLazyImport = createFileRoute('/types/$id')()
const TransmissionsCreateLazyImport = createFileRoute('/transmissions/create')()
const TransmissionsIdLazyImport = createFileRoute('/transmissions/$id')()
const ModelsCreateLazyImport = createFileRoute('/models/create')()
const ModelsIdLazyImport = createFileRoute('/models/$id')()
const ManufacturesCreateLazyImport = createFileRoute('/manufactures/create')()
const ManufacturesIdLazyImport = createFileRoute('/manufactures/$id')()
const CarsCreateLazyImport = createFileRoute('/cars/create')()
const CarsIdLazyImport = createFileRoute('/cars/$id')()
const TypesEditIdLazyImport = createFileRoute('/types/edit/$id')()
const TransmissionsEditIdLazyImport = createFileRoute(
  '/transmissions/edit/$id',
)()
const ModelsEditIdLazyImport = createFileRoute('/models/edit/$id')()
const ManufacturesEditIdLazyImport = createFileRoute('/manufactures/edit/$id')()
const CarsEditIdLazyImport = createFileRoute('/cars/edit/$id')()

// Create/Update Routes

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TypesIndexLazyRoute = TypesIndexLazyImport.update({
  id: '/types/',
  path: '/types/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/index.lazy').then((d) => d.Route))

const TransmissionsIndexLazyRoute = TransmissionsIndexLazyImport.update({
  id: '/transmissions/',
  path: '/transmissions/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmissions/index.lazy').then((d) => d.Route),
)

const ModelsIndexLazyRoute = ModelsIndexLazyImport.update({
  id: '/models/',
  path: '/models/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/models/index.lazy').then((d) => d.Route))

const ManufacturesIndexLazyRoute = ManufacturesIndexLazyImport.update({
  id: '/manufactures/',
  path: '/manufactures/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/index.lazy').then((d) => d.Route),
)

const CarsIndexLazyRoute = CarsIndexLazyImport.update({
  id: '/cars/',
  path: '/cars/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/index.lazy').then((d) => d.Route))

const TypesCreateLazyRoute = TypesCreateLazyImport.update({
  id: '/types/create',
  path: '/types/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/create.lazy').then((d) => d.Route))

const TypesIdLazyRoute = TypesIdLazyImport.update({
  id: '/types/$id',
  path: '/types/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/$id.lazy').then((d) => d.Route))

const TransmissionsCreateLazyRoute = TransmissionsCreateLazyImport.update({
  id: '/transmissions/create',
  path: '/transmissions/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmissions/create.lazy').then((d) => d.Route),
)

const TransmissionsIdLazyRoute = TransmissionsIdLazyImport.update({
  id: '/transmissions/$id',
  path: '/transmissions/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmissions/$id.lazy').then((d) => d.Route),
)

const ModelsCreateLazyRoute = ModelsCreateLazyImport.update({
  id: '/models/create',
  path: '/models/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/models/create.lazy').then((d) => d.Route))

const ModelsIdLazyRoute = ModelsIdLazyImport.update({
  id: '/models/$id',
  path: '/models/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/models/$id.lazy').then((d) => d.Route))

const ManufacturesCreateLazyRoute = ManufacturesCreateLazyImport.update({
  id: '/manufactures/create',
  path: '/manufactures/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/create.lazy').then((d) => d.Route),
)

const ManufacturesIdLazyRoute = ManufacturesIdLazyImport.update({
  id: '/manufactures/$id',
  path: '/manufactures/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/$id.lazy').then((d) => d.Route),
)

const CarsCreateLazyRoute = CarsCreateLazyImport.update({
  id: '/cars/create',
  path: '/cars/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/create.lazy').then((d) => d.Route))

const CarsIdLazyRoute = CarsIdLazyImport.update({
  id: '/cars/$id',
  path: '/cars/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/$id.lazy').then((d) => d.Route))

const TypesEditIdLazyRoute = TypesEditIdLazyImport.update({
  id: '/types/edit/$id',
  path: '/types/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types/edit/$id.lazy').then((d) => d.Route),
)

const TransmissionsEditIdLazyRoute = TransmissionsEditIdLazyImport.update({
  id: '/transmissions/edit/$id',
  path: '/transmissions/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmissions/edit/$id.lazy').then((d) => d.Route),
)

const ModelsEditIdLazyRoute = ModelsEditIdLazyImport.update({
  id: '/models/edit/$id',
  path: '/models/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/models/edit/$id.lazy').then((d) => d.Route),
)

const ManufacturesEditIdLazyRoute = ManufacturesEditIdLazyImport.update({
  id: '/manufactures/edit/$id',
  path: '/manufactures/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/edit/$id.lazy').then((d) => d.Route),
)

const CarsEditIdLazyRoute = CarsEditIdLazyImport.update({
  id: '/cars/edit/$id',
  path: '/cars/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/edit/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/$id': {
      id: '/cars/$id'
      path: '/cars/$id'
      fullPath: '/cars/$id'
      preLoaderRoute: typeof CarsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/create': {
      id: '/cars/create'
      path: '/cars/create'
      fullPath: '/cars/create'
      preLoaderRoute: typeof CarsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/$id': {
      id: '/manufactures/$id'
      path: '/manufactures/$id'
      fullPath: '/manufactures/$id'
      preLoaderRoute: typeof ManufacturesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/create': {
      id: '/manufactures/create'
      path: '/manufactures/create'
      fullPath: '/manufactures/create'
      preLoaderRoute: typeof ManufacturesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/$id': {
      id: '/models/$id'
      path: '/models/$id'
      fullPath: '/models/$id'
      preLoaderRoute: typeof ModelsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/create': {
      id: '/models/create'
      path: '/models/create'
      fullPath: '/models/create'
      preLoaderRoute: typeof ModelsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmissions/$id': {
      id: '/transmissions/$id'
      path: '/transmissions/$id'
      fullPath: '/transmissions/$id'
      preLoaderRoute: typeof TransmissionsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmissions/create': {
      id: '/transmissions/create'
      path: '/transmissions/create'
      fullPath: '/transmissions/create'
      preLoaderRoute: typeof TransmissionsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/$id': {
      id: '/types/$id'
      path: '/types/$id'
      fullPath: '/types/$id'
      preLoaderRoute: typeof TypesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/create': {
      id: '/types/create'
      path: '/types/create'
      fullPath: '/types/create'
      preLoaderRoute: typeof TypesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/': {
      id: '/cars/'
      path: '/cars'
      fullPath: '/cars'
      preLoaderRoute: typeof CarsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/': {
      id: '/manufactures/'
      path: '/manufactures'
      fullPath: '/manufactures'
      preLoaderRoute: typeof ManufacturesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/': {
      id: '/models/'
      path: '/models'
      fullPath: '/models'
      preLoaderRoute: typeof ModelsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmissions/': {
      id: '/transmissions/'
      path: '/transmissions'
      fullPath: '/transmissions'
      preLoaderRoute: typeof TransmissionsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/': {
      id: '/types/'
      path: '/types'
      fullPath: '/types'
      preLoaderRoute: typeof TypesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars/edit/$id': {
      id: '/cars/edit/$id'
      path: '/cars/edit/$id'
      fullPath: '/cars/edit/$id'
      preLoaderRoute: typeof CarsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/edit/$id': {
      id: '/manufactures/edit/$id'
      path: '/manufactures/edit/$id'
      fullPath: '/manufactures/edit/$id'
      preLoaderRoute: typeof ManufacturesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/models/edit/$id': {
      id: '/models/edit/$id'
      path: '/models/edit/$id'
      fullPath: '/models/edit/$id'
      preLoaderRoute: typeof ModelsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmissions/edit/$id': {
      id: '/transmissions/edit/$id'
      path: '/transmissions/edit/$id'
      fullPath: '/transmissions/edit/$id'
      preLoaderRoute: typeof TransmissionsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/edit/$id': {
      id: '/types/edit/$id'
      path: '/types/edit/$id'
      fullPath: '/types/edit/$id'
      preLoaderRoute: typeof TypesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/models/$id': typeof ModelsIdLazyRoute
  '/models/create': typeof ModelsCreateLazyRoute
  '/transmissions/$id': typeof TransmissionsIdLazyRoute
  '/transmissions/create': typeof TransmissionsCreateLazyRoute
  '/types/$id': typeof TypesIdLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/cars': typeof CarsIndexLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/models': typeof ModelsIndexLazyRoute
  '/transmissions': typeof TransmissionsIndexLazyRoute
  '/types': typeof TypesIndexLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/models/edit/$id': typeof ModelsEditIdLazyRoute
  '/transmissions/edit/$id': typeof TransmissionsEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/models/$id': typeof ModelsIdLazyRoute
  '/models/create': typeof ModelsCreateLazyRoute
  '/transmissions/$id': typeof TransmissionsIdLazyRoute
  '/transmissions/create': typeof TransmissionsCreateLazyRoute
  '/types/$id': typeof TypesIdLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/cars': typeof CarsIndexLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/models': typeof ModelsIndexLazyRoute
  '/transmissions': typeof TransmissionsIndexLazyRoute
  '/types': typeof TypesIndexLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/models/edit/$id': typeof ModelsEditIdLazyRoute
  '/transmissions/edit/$id': typeof TransmissionsEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/cars/$id': typeof CarsIdLazyRoute
  '/cars/create': typeof CarsCreateLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/models/$id': typeof ModelsIdLazyRoute
  '/models/create': typeof ModelsCreateLazyRoute
  '/transmissions/$id': typeof TransmissionsIdLazyRoute
  '/transmissions/create': typeof TransmissionsCreateLazyRoute
  '/types/$id': typeof TypesIdLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/cars/': typeof CarsIndexLazyRoute
  '/manufactures/': typeof ManufacturesIndexLazyRoute
  '/models/': typeof ModelsIndexLazyRoute
  '/transmissions/': typeof TransmissionsIndexLazyRoute
  '/types/': typeof TypesIndexLazyRoute
  '/cars/edit/$id': typeof CarsEditIdLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/models/edit/$id': typeof ModelsEditIdLazyRoute
  '/transmissions/edit/$id': typeof TransmissionsEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/models/$id'
    | '/models/create'
    | '/transmissions/$id'
    | '/transmissions/create'
    | '/types/$id'
    | '/types/create'
    | '/cars'
    | '/manufactures'
    | '/models'
    | '/transmissions'
    | '/types'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/models/edit/$id'
    | '/transmissions/edit/$id'
    | '/types/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/models/$id'
    | '/models/create'
    | '/transmissions/$id'
    | '/transmissions/create'
    | '/types/$id'
    | '/types/create'
    | '/cars'
    | '/manufactures'
    | '/models'
    | '/transmissions'
    | '/types'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/models/edit/$id'
    | '/transmissions/edit/$id'
    | '/types/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/cars/$id'
    | '/cars/create'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/models/$id'
    | '/models/create'
    | '/transmissions/$id'
    | '/transmissions/create'
    | '/types/$id'
    | '/types/create'
    | '/cars/'
    | '/manufactures/'
    | '/models/'
    | '/transmissions/'
    | '/types/'
    | '/cars/edit/$id'
    | '/manufactures/edit/$id'
    | '/models/edit/$id'
    | '/transmissions/edit/$id'
    | '/types/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  CarsIdLazyRoute: typeof CarsIdLazyRoute
  CarsCreateLazyRoute: typeof CarsCreateLazyRoute
  ManufacturesIdLazyRoute: typeof ManufacturesIdLazyRoute
  ManufacturesCreateLazyRoute: typeof ManufacturesCreateLazyRoute
  ModelsIdLazyRoute: typeof ModelsIdLazyRoute
  ModelsCreateLazyRoute: typeof ModelsCreateLazyRoute
  TransmissionsIdLazyRoute: typeof TransmissionsIdLazyRoute
  TransmissionsCreateLazyRoute: typeof TransmissionsCreateLazyRoute
  TypesIdLazyRoute: typeof TypesIdLazyRoute
  TypesCreateLazyRoute: typeof TypesCreateLazyRoute
  CarsIndexLazyRoute: typeof CarsIndexLazyRoute
  ManufacturesIndexLazyRoute: typeof ManufacturesIndexLazyRoute
  ModelsIndexLazyRoute: typeof ModelsIndexLazyRoute
  TransmissionsIndexLazyRoute: typeof TransmissionsIndexLazyRoute
  TypesIndexLazyRoute: typeof TypesIndexLazyRoute
  CarsEditIdLazyRoute: typeof CarsEditIdLazyRoute
  ManufacturesEditIdLazyRoute: typeof ManufacturesEditIdLazyRoute
  ModelsEditIdLazyRoute: typeof ModelsEditIdLazyRoute
  TransmissionsEditIdLazyRoute: typeof TransmissionsEditIdLazyRoute
  TypesEditIdLazyRoute: typeof TypesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  CarsIdLazyRoute: CarsIdLazyRoute,
  CarsCreateLazyRoute: CarsCreateLazyRoute,
  ManufacturesIdLazyRoute: ManufacturesIdLazyRoute,
  ManufacturesCreateLazyRoute: ManufacturesCreateLazyRoute,
  ModelsIdLazyRoute: ModelsIdLazyRoute,
  ModelsCreateLazyRoute: ModelsCreateLazyRoute,
  TransmissionsIdLazyRoute: TransmissionsIdLazyRoute,
  TransmissionsCreateLazyRoute: TransmissionsCreateLazyRoute,
  TypesIdLazyRoute: TypesIdLazyRoute,
  TypesCreateLazyRoute: TypesCreateLazyRoute,
  CarsIndexLazyRoute: CarsIndexLazyRoute,
  ManufacturesIndexLazyRoute: ManufacturesIndexLazyRoute,
  ModelsIndexLazyRoute: ModelsIndexLazyRoute,
  TransmissionsIndexLazyRoute: TransmissionsIndexLazyRoute,
  TypesIndexLazyRoute: TypesIndexLazyRoute,
  CarsEditIdLazyRoute: CarsEditIdLazyRoute,
  ManufacturesEditIdLazyRoute: ManufacturesEditIdLazyRoute,
  ModelsEditIdLazyRoute: ModelsEditIdLazyRoute,
  TransmissionsEditIdLazyRoute: TransmissionsEditIdLazyRoute,
  TypesEditIdLazyRoute: TypesEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/profile",
        "/cars/$id",
        "/cars/create",
        "/manufactures/$id",
        "/manufactures/create",
        "/models/$id",
        "/models/create",
        "/transmissions/$id",
        "/transmissions/create",
        "/types/$id",
        "/types/create",
        "/cars/",
        "/manufactures/",
        "/models/",
        "/transmissions/",
        "/types/",
        "/cars/edit/$id",
        "/manufactures/edit/$id",
        "/models/edit/$id",
        "/transmissions/edit/$id",
        "/types/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/cars/$id": {
      "filePath": "cars/$id.lazy.jsx"
    },
    "/cars/create": {
      "filePath": "cars/create.lazy.jsx"
    },
    "/manufactures/$id": {
      "filePath": "manufactures/$id.lazy.jsx"
    },
    "/manufactures/create": {
      "filePath": "manufactures/create.lazy.jsx"
    },
    "/models/$id": {
      "filePath": "models/$id.lazy.jsx"
    },
    "/models/create": {
      "filePath": "models/create.lazy.jsx"
    },
    "/transmissions/$id": {
      "filePath": "transmissions/$id.lazy.jsx"
    },
    "/transmissions/create": {
      "filePath": "transmissions/create.lazy.jsx"
    },
    "/types/$id": {
      "filePath": "types/$id.lazy.jsx"
    },
    "/types/create": {
      "filePath": "types/create.lazy.jsx"
    },
    "/cars/": {
      "filePath": "cars/index.lazy.jsx"
    },
    "/manufactures/": {
      "filePath": "manufactures/index.lazy.jsx"
    },
    "/models/": {
      "filePath": "models/index.lazy.jsx"
    },
    "/transmissions/": {
      "filePath": "transmissions/index.lazy.jsx"
    },
    "/types/": {
      "filePath": "types/index.lazy.jsx"
    },
    "/cars/edit/$id": {
      "filePath": "cars/edit/$id.lazy.jsx"
    },
    "/manufactures/edit/$id": {
      "filePath": "manufactures/edit/$id.lazy.jsx"
    },
    "/models/edit/$id": {
      "filePath": "models/edit/$id.lazy.jsx"
    },
    "/transmissions/edit/$id": {
      "filePath": "transmissions/edit/$id.lazy.jsx"
    },
    "/types/edit/$id": {
      "filePath": "types/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */