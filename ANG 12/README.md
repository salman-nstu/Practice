# User Registration Form

A simple Angular 17 practice project using NgModules, FormsModule, and ngModel.

## Run locally

```sh
npm install
npm start
```

Open http://localhost:4200. Run `npm run build` for a production build.

The registration component is in `src/app/users/registration/` and is declared and exported by `UsersModule`.

- Required name (3–50 characters), email, and password (8–30 characters).
- Student/Teacher selection and required terms checkbox.
- Required address with a four-digit postal code.
- Angular `@if` errors after interaction, automatic invalid-field styling, and disabled submission until valid.
- Reset, Show errors, and an expandable live JSON preview.
- Valid submissions log the values, show a demo confirmation, and reset the model and form state.

This is a local exercise with no backend or account creation. Use sample data: the preview and console include the password, as specified in the exercise. Remove password logging before using this in a real application.
