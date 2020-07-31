# Array JS Methods


## Instalation
```npm install arrayjs-methods```

## Technologies

1. Typescript
2. Eslint + Prettier
3. TSC
4. Mocha Testing

## Methods:

1. **filter** function
2. **map** function
3. **find** function
4. **concat** function
5. **pipe**

### All the functions do not use regular filter, map, find and concat, they are realized using for(), if() etc ..

## filter

- filters elements of array

```js
import { filter } from 'arrayjs-methods';

const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

filter(arr, (item) => item.length > 6); // returns ["exuberant", "destruction", "present"]
```

## map

```js
import { map } from 'arrayjs-methods';

const arr = ["spray", "limit"];

map(arr, (item, index) => ({ id: index, name: item })); // returns [{ id: 0, name: 'spray' }, { id: 1, name: 'limit' }]
```

## find

```js
import { find } from 'arrayjs-methods';


const arr = [
  { id: 0, name: "spray" },
  { id: 1, name: "limit" },
];
const id = 1;

find(arr, (item) => item.id === id); // returns { id: 1, name: 'limit' }
```

## concat

```js
import { concat } from 'arrayjs-methods';


const arr1 = ["spray", "limit", "elite"];
const arr2 = ["exuberant", "destruction", "present"];

concat(arr1, arr2); // returns ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
```

## pipe

```js
import { pipe } from 'arrayjs-methods';

const arr = ["spray", "limit", "elite", "exuberant", "destruction"];

pipe(arr, [
  filter((item) => item.length > 6), // returns ["exuberant", "destruction"]
  map((item, index) => ({ id: index, name: item })), // returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
]);

// pipe returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
```
