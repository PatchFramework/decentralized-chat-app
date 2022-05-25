function TimeConverter(timestamp) {
    let t = new Date(timestamp)
    let hours = t.getHours()
    let minutes = t.getMinutes()
    let day = t.getDate()
  return (`${hours}:${minutes}`)
}

export default TimeConverter;