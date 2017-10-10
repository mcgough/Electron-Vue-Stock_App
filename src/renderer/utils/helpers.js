const helpers = {
  hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  },
  setPropsToNull(obj) {
    Object.keys(obj).forEach((key) => { obj[key] = null; });
  },
  cleanOrderedProps(obj) {
    const keys = Object.keys(obj);
    const cleanObj = keys.reduce((returnObj, key) => {
      const newKey = key.split('. ')[1];
      returnObj[newKey] = obj[key];
      return returnObj;
    }, {});
    return cleanObj;
  },
};

export default helpers;
