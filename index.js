class Driver {
	constructor(name, startDate){
	this.name = name
	this.startDate = new Date(startDate)
	}

	yearsExperienceFromBeginningOf(year){
	// let	year = new Date().getFullYear();
return year - this.startDate.getFullYear();
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
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}
	indexOfAnAvenue(avenue){
		// if eastWest.prototype.includes(avenue)
 return eastWest.indexOf(avenue);
// else
	// return "Avenue doesn't exist";
	}
	
	blocksTravelled(){
		let horizontalTravel = this.indexOfAnAvenue(this.endingLocation.horizontal) - this.indexOfAnAvenue(this.beginningLocation.horizontal) 
		let verticalTravel = this.endingLocation.vertical - this.beginningLocation.vertical
	return horizontalTravel + verticalTravel;
	}
	estimatedTime(busy){
		if(busy){
			return this.blocksTravelled()/2;


		} else {
			return this.blocksTravelled()/3;

		}


	}


}

