class Driver {
    constructor(name, date) {
        this.name = name;
        this.startDate = new Date(date);
    };

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear();
    };
};

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
    constructor(begin, end) {
        this.beginningLocation = begin;
        this.endingLocation = end;
    };

    blocksTravelled() {
        let aveDist = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        let streetDist = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
        return aveDist + streetDist;
    };

    estimatedTime(peak) {
        return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
    };
};
