interface ExecuteFunc<T> {
  execute: (arr: T[]) => T[];
}

module.exports = {
  filter: <T>(
    ArrOrCallback: (item: T) => boolean | Array<T>,
    callback: (item: T) => boolean
  ): Array<T> | ExecuteFunc<T> => {
    if (Array.isArray(ArrOrCallback)) {
      const newArr: Array<T> = [];
      let j = 0;
      for (let i = 0; i < ArrOrCallback.length; i++) {
        if (callback(ArrOrCallback[i])) {
          newArr[j] = ArrOrCallback[i];
          j++;
        }
      }
      return newArr;
    }
    function execute(arr: T[]) {
      const newArr: T[] = [];
      let j = 0;
      for (let i = 0; i < arr.length; i++) {
        if (ArrOrCallback(arr[i])) {
          newArr[j] = arr[i];
          j++;
        }
      }
      return newArr;
    }

    return {
      execute,
    };
  },

  map: <T>(
    ArrOrCallback: (item: T, i: number) => any | Array<T>,
    callback: (item: T, i: number) => any
  ): Array<T> | ExecuteFunc<T> => {
    if (Array.isArray(ArrOrCallback)) {
      const newArr: Array<T> = [];
      for (let i = 0; i < ArrOrCallback.length; i++) {
        newArr[i] = callback(ArrOrCallback[i], i);
      }
      return newArr;
    }
    function execute(arr: T[]) {
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr[i] = ArrOrCallback(arr[i], i);
      }
      return newArr;
    }
    return {
      execute,
    };
  },

  find: <T>(
    ArrOrCallback: (item: T) => boolean | Array<T>,
    callback: (item: T) => boolean
  ) => {
    if (Array.isArray(ArrOrCallback)) {
      for (let i = 0; i < ArrOrCallback.length; i++) {
        if (callback(ArrOrCallback[i])) return ArrOrCallback[i];
      }
    }
    function execute(arr: []) {
      for (let i = 0; i < arr.length; i++) {
        if (ArrOrCallback(arr[i])) return arr[i];
      }
    }

    return {
      execute,
    };
  },

  concat: <T>(arr1: T[], arr2: T[]) => {
    return [...arr1, ...arr2];
  },

  pipe: <T>(arr: T[], callbacks: ExecuteFunc<T>[]) => {
    let newArr = arr;
    for (let i = 0; i < callbacks.length; i++) {
      newArr = callbacks[i].execute(newArr);
    }

    return newArr;
  },
};
