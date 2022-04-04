<h1 align="center">✨🔑 object-keys-ts 🔑✨</h1>

<div align="center">
  <strong>type friendly `Object.keys`</strong>
</div>
<br />
<br />

## Install

```sh
npm i object-keys-ts
```

## Usage

```js
import { objectKeys } from "object-keys-ts";

const keys = objectKeys({
  foo: "bar",
  baz: "qux",
});

// expect(keys).toEqual(["foo", "baz"]);
```
