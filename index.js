let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor (name, joined) {
    this.name = name;
    this.joined = joined;
  }

  startDate() {
    return new Date(this.joined)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return new Date (endDate).getFullYear() - new Date(this.joined).getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const beginningLocationHorizontal = eastWest.indexOf(this.beginningLocation['horizontal'])
    const endingLocationHorizontal = eastWest.indexOf(this.endingLocation['horizontal'])
    const beginningLocationVertical = parseInt(this.beginningLocation['vertical'],10)
    const endingLocationVertical = parseInt(this.endingLocation['vertical'], 10)

    const horizontalDistance = Math.abs(beginningLocationHorizontal - endingLocationHorizontal)
    const verticalDistance = Math.abs(beginningLocationVertical - endingLocationVertical)

    return horizontalDistance + verticalDistance
  }

  estimatedTime(peakTime) {
    if (peakTime) {
      return this.blocksTravelled() / 2;
    } else {
        return this.blocksTravelled() / 3;
    }
  }

}
