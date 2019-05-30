
let eastWest = [
			  '1st Avenue',
			  '2nd Avenue',
			  '3rd Avenue',
			  'Lexington Avenue',
			  'Park',
			  'Madison Avenue',
			  '5th Avenue'
			];




class Driver{
	constructor(name, startDate){
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year){
		let dateStr = this.startDate.toString();
		let startedStr = dateStr.split(' ')[3]
		return parseInt(year) - parseInt(startedStr);
	}
}
class Route{
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	avenueToInt(av){
			return eastWest.indexOf(av);
		}

	blocksTravelled() {
    let horizontalDistance = this.avenueToInt( this.endingLocation.horizontal ) - this.avenueToInt( this.beginningLocation.horizontal );
    let verticalDistance =  this.endingLocation.vertical - this.beginningLocation.vertical;
    return horizontalDistance + parseInt(verticalDistance);
  }

	estimatedTime(peak){
		if (peak){
			return Math.trunc(this.blocksTravelled()/2);
		} else {
			return Math.trunc(this.blocksTravelled()/3);
		}
	}
}

// The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours. 
//During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.