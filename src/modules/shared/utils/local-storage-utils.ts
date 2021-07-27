interface LocalStorageItem {
  'auth-token': string;
}

export function getItem<K extends keyof LocalStorageItem>(
  key: K,
): LocalStorageItem[K] | null {
  const value = localStorage.getItem(key);
  let result;

  if (value === null) return null;

  try {
    result = JSON.parse(value);
  } catch (err) {
    result = value;
  }

  return result as LocalStorageItem[K];
}

export function setItem<K extends keyof LocalStorageItem>(
  key: K,
  value: LocalStorageItem[K],
) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem<K extends keyof LocalStorageItem>(key: K) {
  return localStorage.removeItem(key);
}

const LocalStorageUtils = {
  getItem,
  setItem,
  removeItem,
};

export default LocalStorageUtils;
