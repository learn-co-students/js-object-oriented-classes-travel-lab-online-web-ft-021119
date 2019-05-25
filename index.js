class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){

    return Math.abs(year - this.startDate.getFullYear())
  }
}

let eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let horizontalDist = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    let verticalDist = this.endingLocation.vertical - this.beginningLocation.vertical
    return verticalDist + horizontalDist
  }

  estimatedTime(peak ){
    if (peak === true){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
