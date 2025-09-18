declare module 'deep-freeze' {
  function deepFreeze<T>(obj: T): Readonly<T>;
  export = deepFreeze;
}
