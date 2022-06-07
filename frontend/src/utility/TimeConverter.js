function TimeConverter(timestamp) {
  // convert the timestamp to a date in dd.mm.yy format with 0 padding
    let t = new Date(timestamp)
    console.log("Timestamp is:", t)

    let hours = t.getHours().toString()
    
    let minutes = t.getMinutes().toString()
    
    let day = t.getDate().toString()
    //if month has one digit pad with 0 for two digits
    if (day.length === 1) day = "0" + day
    
    let month = t.getMonth()+1 // convert (0-11) to (1-12)
    month = month.toString()
    //if month has one digit pad with 0 for two digits
    if (month.length === 1) month = "0" + month
    
    let year = t.getFullYear().toString().slice(2, 4) // only use the last two digits of year
  
    return (`${day}.${month}.${year} at ${hours}:${minutes}`)
}

export default TimeConverter;