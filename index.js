class Driver{
  constructor(name, startDate)
  {
    this.name = name
    this.startDate = new Date(startDate) 
  }
  yearsExperienceFromBeginningOf(endDate) {
    let end = new Date(endDate).getFullYear()
    let start = this.startDate.getFullYear()

    return end - start + 1;
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
  constructor(begin, ending) {
    this.beginningLocation = begin
    this.endingLocation = ending
  }
  blocksTravelled() {

    let horizontalStart = eastWest.indexOf(this.beginningLocation.horizontal)
    let horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontalBlocksTraveled = Math.abs(horizontalStart - horizontalEnd)

    let verticalBlocksTraveled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return horizontalBlocksTraveled + verticalBlocksTraveled
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}

//   // peak = 2bm == 6 min for 12 blocks
//   // off peak = 3bpm == 4 min for 12 blocks
//
//   // peak => this.blocksTravelled() / 2
//   // off peak => this.blocksTravelled() / 3
