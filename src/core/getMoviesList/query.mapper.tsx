
type IQuery = Record<string, string | number>

export const mapQueryToVM = (data: IQuery): string => {
  const keys: string[] = Object.keys(data)
  if (keys.length > 0) {
    let query = `?${keys[0]}=${data[keys[0]]}`
    for (let i = 1; i < keys.length; i++) {
      query += `&${keys[i]}=${data[keys[i]]}`
    }
    return query
  }
  return '?released=-1'
}
