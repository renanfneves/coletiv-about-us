export default function Debounce(callback: any, time: number) {
  let interval: any;
  let currentCall = 0;

  const debounce = () => {
    currentCall++;

    if(currentCall === 3) {
      interval = setTimeout(() => {
        interval = null;
        callback();
      }, time);
      
      return true;
    } else return false;
  };

  debounce.clearTimeout = clearTimeout(interval);

  return debounce;
}

