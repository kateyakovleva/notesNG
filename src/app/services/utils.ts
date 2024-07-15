
export const convertFormDataToObject = <T>(data: FormData):T => {
  //делаем все св-ва необязательными, потому что у нас есть id в интерфейсе, а с formData id не приходит.
  let note: Partial<T> = {};

  data.forEach((value, key ) => {
    note[ key as(keyof T) ] = value as T[keyof T];
  })

  return note as T;
}
