function randomFromRange() {
    const max = 256
    const min = 100
    return Math.random() * (max - min) + min;
  }

function RandomColor() {
    const brightness = 90

    // generate random color with brightness between 0 and 100%
    var baseRgb = [randomFromRange(), randomFromRange(), randomFromRange()]
    var baseBrightness = [brightness * 2.55, brightness * 2.55, brightness * 2.55]; //2.55 => 255/100 -> 100 brigthness levels
    var mixRgb = [baseRgb[0] + baseBrightness[0], baseRgb[1] + baseBrightness[1], baseRgb[2] + baseBrightness[2]]
    var finalRgb = mixRgb.map((v) => Math.floor(v / 2.0))
    return "rgb(" + finalRgb.join(",") + ")";
}

export default RandomColor