class Driver {
  constructor(name, dayJoined) {
    this.name = name;
    this.startDate = new Date(dayJoined);
  }

  yearsExperienceFromBeginningOf() {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.startDate.getFullYear() ;
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
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let horizontalBlocks =  Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

    let verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    return horizontalBlocks + verticalBlocks;
  };

  estimatedTime(peakHours) {
    if (peakHours === true) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    };
  };

}
