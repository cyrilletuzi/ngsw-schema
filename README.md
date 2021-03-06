# JSON schema for Angular service worker configuration file (`ngsw-config.json`)

## Angular 8 update

My [PR in Angular repo](https://github.com/angular/angular/pull/27859) has been accepted and merged,
so this feature is now directly available in Angular >= 8.0.0-beta.7.
This lib is only useful in Angular 6 or 7.

## By the same author

- [Angular schematics extension for VS Code](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics) (GUI for Angular CLI commands)
- [@ngx-pwa/local-storage](https://github.com/cyrilletuzi/angular-async-local-storage): 1st Angular library for local storage
- Popular [Angular posts on Medium](https://medium.com/@cyrilletuzi)
- Follow updates of this lib on [Twitter](https://twitter.com/cyrilletuzi)
- **[Angular onsite trainings](https://formationjavascript.com/formation-angular/)** (based in Paris, so the website is in French, but [my English bio is here](https://www.cyrilletuzi.com/en/) and I'm open to travel)

## Why this lib?

`@angular/service-worker` is a very powerful tool to build Progressive Web Apps.
The default service worker configuration file (`ngsw-config.json`) generated by the Angular CLI
(either via `ng add @angular/pwa` or `ng g service-worker`) already takes care of saving permanently the static files of your application
(`index.html`, JavaScript files...).

But you can go a lot further by adding `dataGroups` to save temporarily dynamic data (for example,
your API calls, including images), which would be too big for `localStorage` or too difficult via `indexedDB`.

The [official documentation](https://angular.io/guide/service-worker-config) explains it all,
but as the `ngsw-config.json` file doesn't have a JSON schema,
you don't get any assistance, and worse, mistakes are not always catched by the building system,
so you could end up with errors in your production build.

**So this lib is just the missing JSON schema for `ngsw-config.json` for productivity:**
- **assistance**,
- **no more errors**!

## Getting started

**Install** the lib (as a dev dependency):

```bash
npm install @ngx-pwa/ngsw-schema -D
```

Now you just have to **add it to your `ngsw-config.json` file** (of course, adapt the path to your case):

```typescript
{
  "$schema": "../node_modules/@ngx-pwa/ngsw-schema/schema.json"
}
```

## Changelog

[Changelog available here](./CHANGELOG.md).

## License

MIT
