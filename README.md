# NgStarterWeb

Starter project for Angular application.

## Get Started
- clone repo
- open folder
- yarn
- yarn start

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Project architecture
- `+lazy-module` - some LAZY module (attn to the `+` prefix for lazy-loaded modules)
- `framework` - it contains the modules which are obligatory for the app:
    - `core` - it contains the main modules required for lazyLoading the modules
      - `base.component.ts` - component which included `ngUnsubscribe`. So you dont need carry about it, just extend you class eg. 
      ```
      export class DashboardIndexComponent extends BaseComponent {
        constructor() {
            super()
        }
      }
      ``` 
      - `base.service.ts` - service which included `http` and `apiUrl` variable. Just extend you service eg.
      ```
      export class MyService exteds BaseService {
        myMethod() {
            this.http.get(`${this.apiUrl}/posts`);
        }
      }
      ```
    - `http` - interceptors
    - `i18n` - translation (@ngx-translate)
    - `material` - all commonly used material modules
- `layout` - basic layout component such as `header` and `slidenav-menu`    
- `shared`
    - `models` - it contains the modules for all entities used in the project. Do not forget to update `index.ts` when you add a new file.
    - `services` - it contains the services used in more than one module.
    - `components` - it contains the components used in mire than one module.
- `store` - contain all necessary modules/actions/reducers/effects for store    

## Project paths
The custom paths are used in the project because we want to avoid the usage of `../..` for example:

- import something from `framework` you need to write `import ~framework/material/material.module`;
- import something from `shared` you need to write `import ~shared/models/user.model`;

## Project Layout
We use [Flex Layout](https://github.com/angular/flex-layout/wiki) for grid and [Angular Material](https://material.angular.io/) for component style.
