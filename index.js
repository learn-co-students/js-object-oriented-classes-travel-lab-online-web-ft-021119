class Driver {
   constructor(name, startDate) {
      this.name = name
      this.startDate = new Date(startDate)
   }

   yearsExperienceFromBeginningOf(inputDate) {
      const endYear = new Date(inputDate).getFullYear() + 1
      const startYear = this.startDate.getFullYear()
      return endYear - startYear
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
];

class Route {
   constructor(begin, ending) {
      this.beginningLocation = begin
      this.endingLocation = ending

   }

   blocksTravelled() {
      const verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)

      const horizontalStart = eastWest.indexOf(this.beginningLocation.horizontal)
      const horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal)

      const horizontalBlocks = Math.abs(horizontalEnd - horizontalStart)

      if (verticalBlocks === 0) {
         return horizontalBlocks
      } else if (horizontalBlocks === 0) {
         return verticalBlocks
      } else {
         return verticalBlocks + horizontalBlocks
      }
   }

   estimatedTime(peak) {
      if (!!peak) {
         return this.blocksTravelled() / 2
      } else {
         return this.blocksTravelled() / 3
      }
   }
}