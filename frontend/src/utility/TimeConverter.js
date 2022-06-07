const addZeroPaddingIfNecessary = (value) => {
  //if input has one digit pad with one 0 on the left to get to two digits
  //e.g. 5 -> "05"
    let v = value.toString()
    if (v.length === 1) v = "0" + v
    return v
}

function TimeConverter(timestamp) {
  // convert the timestamp to a date in dd.mm.yy format with 0 padding
    let t = new Date(timestamp)
    console.log("Timestamp is:", t)

    let hours = addZeroPaddingIfNecessary(t.getHours())
    
    let minutes = addZeroPaddingIfNecessary(t.getMinutes())
    
    let day = addZeroPaddingIfNecessary(t.getDate())

    let month = addZeroPaddingIfNecessary(t.getMonth()+1) // +1 will convert (0-11) to (1-12)
    
    let year = t.getFullYear().toString().slice(2, 4) // only use the last two digits of year
  
    return (`${day}.${month}.${year} at ${hours}:${minutes}`)
}

export default TimeConverter;