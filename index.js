class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }

}
class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ]
    let beginhorz = eastWest.indexOf(this.beginningLocation.horizontal)
    let endhorz = eastWest.indexOf(this.endingLocation.horizontal)
    let horz = Math.abs(beginhorz - endhorz)
    let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return horz + vert


  }
  estimatedTime() {
    let sum = 1
    if(arguments.length){
      sum = this.blocksTravelled() / 2
    } else{
      sum = this.blocksTravelled() / 3
    }
    return sum

  }

}
