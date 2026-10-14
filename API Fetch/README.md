# API Fetch — Angular product catalog

An Angular 22 application converted from the original vanilla JavaScript product catalog. It uses standalone components, strict TypeScript, HTML templates, component CSS, Angular Router, HttpClient, RxJS, and signals.

## Run locally

Use a Node.js version supported by Angular 22: `^22.22.3`, `^24.15.0`, or `>=26.0.0`.

```powershell
cd "D:\Practice\API Fetch"
npm install
npm start
```

Open `http://localhost:4200`. The Angular project must run through the development server; opening an HTML file directly or using Live Server will not bootstrap it.

```powershell
npm run build   # Production output: dist/api-fetch/browser
npm test        # Automated component, routing, HTTP, and cart tests
npm run test:watch
```

The installed dependencies are recorded in `package-lock.json`. Use `npm ci` for repeatable installs.

## Structure

```text
src/
  main.ts                     Application bootstrap
  index.html                  Browser entry document
  styles.css                  Global and print styles
  app/
    app.component.*           Navigation and router outlet
    app.config.ts             HTTP and routing providers
    app.routes.ts             Catalog, product, and cart routes
    models/product.ts         Product, API response, and cart types
    services/
      product.service.ts      DummyJSON API requests
      cart.service.ts         Shared cart state and totals
    pages/
      product-list/           Debounced search and pagination
      product-detail/         Product information and quantity selection
      cart/                   Cart controls and printable receipt
    utils/pagination.js       JavaScript utility with checked JSDoc types
legacy/                       Original HTML, JavaScript, and CSS for reference
```

Angular application logic is TypeScript, compiled to JavaScript by the build. The pagination utility demonstrates importing a regular JavaScript module into TypeScript with `allowJs` and `checkJs`. HTML and CSS remain in separate files alongside each component. The legacy scripts are not loaded by Angular.

## Behavior

- Fetches products from `https://dummyjson.com/products`, with ten results per page.
- Searches after a 500 ms pause; search results are also paginated. Query/page state is stored in the URL and preserved when returning from details.
- Cancels outdated HTTP requests and displays loading, empty, and retry states.
- Shares cart state across routes, replaces an existing item's selected quantity, and limits quantities to available stock. Reducing a cart quantity to zero removes the item.
- Keeps the original in-memory cart behavior: refreshing the page clears the cart.
- Confirm Order opens the browser print dialog for a receipt; it does not submit an order or process a payment. All price labels use USD consistently with the catalog. The browser can save the receipt as PDF.
- Interpolates API text through Angular templates and adapts the layout to smaller screens.

The public DummyJSON API requires internet access. Automated tests mock its responses and can run without contacting the API. Static hosting must rewrite application routes (such as `/products/1` and `/cart`) to `index.html`.

References: [Angular HttpClient setup](https://angular.dev/guide/http/setup), [Angular version compatibility](https://angular.dev/reference/versions).
