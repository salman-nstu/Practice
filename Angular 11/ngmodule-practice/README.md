# User Management

A small Angular 17 NgModule practice app following the supplied exercise.

## Run

```powershell
cd ngmodule-practice
npm install
npm start
```

Open http://localhost:4200. Select any of the three users to display their name,
email, and role below the list. No user is selected initially.

```powershell
npm run build
```

Production output is written to `dist/ngmodule-practice/browser`.

## Structure

- `AppModule` bootstraps the application and imports `UsersModule`.
- `UsersModule` declares the user list and cards, and imports `SharedModule`.
- `SharedModule` declares and exports the badge and re-exports `CommonModule`.
- `@for` renders users, `@Input()` passes each user to a card, and `@Output()`
  sends the selection back to the list.
- The badge uses `ngClass` for its active and inactive styles.

The sample users live in `src/app/users/user-list/user-list.component.ts`.
Selection is kept in memory and resets on refresh.
