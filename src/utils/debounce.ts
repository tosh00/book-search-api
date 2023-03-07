const debounce = (callback: { (): unknown }, timeout: number = 300) => {
  let timer: number;

  console.log('test')
  return (...args: []) => {

    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};

export default debounce;