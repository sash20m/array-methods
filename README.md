# arrayjs-methods

## Installing

```bash
$ npm install arrayjs-methods
```

## Methods:

1. **filter**
2. **map**
3. **find**
4. **concat**
5. **pipe**

## Example

### Filter

Filters the item of an array

```js
import { filter } from "arrayjs-methods";

const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

filter(arr, (item) => item.length > 6);
// returns ["exuberant", "destruction", "present"]
```

### Map

Maps the item of an array

```js
import { map } from "arrayjs-methods";

const arr = ["spray", "limit"];

map(arr, (item, index) => ({ id: index, name: item }));
// returns [{ id: 0, name: 'spray' }, { id: 1, name: 'limit' }]
```

### Find

Find the item in an array

```js
import { find } from "arrayjs-methods";

const arr = [
  { id: 0, name: "spray" },
  { id: 1, name: "limit" },
];
const id = 1;

find(arr, (item) => item.id === id);
// returns { id: 1, name: 'limit' }
```

### Concat

Merges two arrays together

```js
import { concat } from "arrayjs-methods";

const arr1 = ["spray", "limit", "elite"];
const arr2 = ["exuberant", "destruction", "present"];

concat(arr1, arr2);
// returns ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
```

### Pipe

Merges two arrays together

```js
import { pipe } from "arrayjs-methods";

const arr = ["spray", "limit", "elite", "exuberant", "destruction"];

pipe(arr, [
  filter((item) => item.length > 6), // returns ["exuberant", "destruction"]
  map((item, index) => ({ id: index, name: item })), // returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
]);

// pipe returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
```

## Credits

EBS

## License

[MIT](LICENSE)
