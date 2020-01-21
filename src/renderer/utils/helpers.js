const helpers = {
  hasOwnProp: (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop),
  setPropsToNull: obj =>
    Object.keys(obj).forEach(key => {
      obj[key] = null;
    }),
  cleanOrderedProps: obj =>
    Object.keys(obj).reduce((returnObj, key) => {
      const newKey = key.split(". ")[1];
      returnObj[newKey] = obj[key];
      return returnObj;
    }, {})
};

export default helpers;
