export const get = (url: string) => {
  const val = localStorage.getItem(url);
  if(val) {
    try {
      return JSON.parse(val);
    } catch (e) {
    }
  }
  return null;
}

export const post = <T>(url: string, value: T) => {
  localStorage.setItem(url, JSON.stringify(value))
}
