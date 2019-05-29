class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  };

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.slice(-4);
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

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

    const blocksEastWest = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    const blocksNorthSouth = this.endingLocation.vertical - this.beginningLocation.vertical;

    return blocksEastWest + blocksNorthSouth;
  };

  estimatedTime(peak = false) {
    if (peak === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    };
  };
}
