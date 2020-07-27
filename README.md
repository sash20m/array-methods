# EBS Utils

## Technologies

1. ESLint + Prettier
2. Typescript
3. Rollup (to build it as plugin)
4. Unit tests

## Methods:

1. **filter** function
2. **map** function
3. **find** function
4. **concat** function
5. **pipe**

### All the functions do not use regular filter, map, find and concat, they are realized using for(), while() and etc ..

## filter

- filters elements of array

```js
const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

filter(arr, (item) => item.length > 6); // returns ["exuberant", "destruction", "present"]
```

## map

```js
const arr = ["spray", "limit"];

map(arr, (item, index) => ({ id: index, name: item })); // returns [{ id: 0, name: 'spray' }, { id: 1, name: 'limit' }]
```

## find

```js
const arr = [
  { id: 0, name: "spray" },
  { id: 1, name: "limit" },
];
const id = 1;

find(arr, (item) => item.id === id); // returns { id: 1, name: 'limit' }
```

## concat

```js
const arr1 = ["spray", "limit", "elite"];
const arr2 = ["exuberant", "destruction", "present"];

concat(arr1, arr2); // returns ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
```

## pipe

```js
const arr = ["spray", "limit", "elite", "exuberant", "destruction"];

pipe(arr, [
  filter((item) => item.length > 6), // returns ["exuberant", "destruction"]
  map((item, index) => ({ id: index, name: item })), // returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
]);

// pipe returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
```
