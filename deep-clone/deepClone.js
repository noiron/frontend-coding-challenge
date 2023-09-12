function deepClone(target, map = new WeakMap()) {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (map.has(target)) return map.get(target);

  const cloned = Array.isArray(target) ? [] : {};
  map.set(target, cloned);
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      cloned[key] = deepClone(target[key], map);
    }
  }

  return cloned;
}

module.exports = deepClone;
