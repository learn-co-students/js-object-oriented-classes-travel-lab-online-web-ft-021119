class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    const end = new Date(endDate).getFullYear() + 1
    const start = this.startDate.getFullYear()
    return end - start
  }
}

const eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
]

class Route {
  constructor(begin, end) {
    this.beginningLocation = begin
    this.endingLocation = end
  }

  blocksTravelled() {
    let vBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    let horizStart = eastWest.indexOf(this.beginningLocation.horizontal)
    let horizEnd = eastWest.indexOf(this.endingLocation.horizontal)
    // you don't have to add one to offset index because we are just grabbing difference in indices
    // eastWest.indexOf('Park') => 4

    let hBlocks = Math.abs(horizStart - horizEnd)
    return vBlocks + hBlocks
  }

  estimatedTime(peak) {
    if (!!peak) {
      return Math.round(this.blocksTravelled() / 2)
    } else {
      return Math.round(this.blocksTravelled() / 3)
    }
  }




}
