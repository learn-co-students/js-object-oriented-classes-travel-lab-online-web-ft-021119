class Driver {
    constructor(name, day) {
        this.name = name;
        this.startDate = new Date(day);
    }
    //startDate and yearsExperienceFromBeginningOf

    //startDate(day) {
    //    return new Date(day);
    //}

    yearsExperienceFromBeginningOf(inputDate) {
        const endYear = new Date(inputDate).getFullYear() + 1
        const startYear = this.startDate.getFullYear()
        return endYear - startYear
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
