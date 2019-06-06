class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return new Date(year).getFullYear() - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
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
    ];

    if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
      return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    }
    else {
      let temp = 0;
      let temp2 = 0;
      for (let i = 0; i < eastWest.length; i++) {
        if (this.beginningLocation.horizontal === eastWest[i]) {
          temp = i;
        }
        if (this.endingLocation.horizontal === eastWest[i]) {
          temp2 = i;
        }
      }
      return Math.abs(temp - temp2) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    }
  }

  estimatedTime(boolean) {
    if (boolean === true) {
      return Math.round(this.blocksTravelled() / 2);
    }
    else {
      return Math.round(this.blocksTravelled() / 3);
    }
  }
}
