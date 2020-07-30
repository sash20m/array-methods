module.exports = {
  filter: (ArrOrCallback: any, callback: (item: any) => any): any => {
    if (Array.isArray(ArrOrCallback)) {
      const newArr = [];
      let j = 0;
      for (let i = 0; i < ArrOrCallback.length; i++) {
        if (callback(ArrOrCallback[i])) {
          newArr[j] = ArrOrCallback[i];
          j++;
        }
      }
      return newArr;
    }
    function execute(arr: any) {
      const newArr = [];
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
      // return the object ready to execute
      execute,
    };
  },

  map: (
    ArrOrCallback: (item: any, i: number) => boolean | [],
    callback: (item: any, i: number) => boolean
  ) => {
    if (Array.isArray(ArrOrCallback)) {
      const newArr = [];
      for (let i = 0; i < ArrOrCallback.length; i++) {
        newArr[i] = callback(ArrOrCallback[i], i);
      }
      return newArr;
    }
    function execute(arr: []) {
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

  find: (
    ArrOrCallback: (item: any) => boolean | [],
    callback: (item: any) => boolean
  ): any => {
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

  concat: (arr1: [], arr2: []): any => {
    return [...arr1, ...arr2];
  },

  pipe: (arr: [], callbacks: any[]): any => {
    let newArr = arr;
    for (let i = 0; i < callbacks.length; i++) {
      newArr = callbacks[i].execute(newArr);
    }

    return newArr;
  },
};
