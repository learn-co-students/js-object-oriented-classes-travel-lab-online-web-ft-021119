class Driver{
  constructor(name, startDate)
  {
    this.name = name
    this.startDate = new Date(startDate) 
  }
  yearsExperienceFromBeginningOf(endDate) {
    let end = new Date(endDate).getFullYear()
    let start = this.startDate.getFullYear()

    return end - start + 1;
  }
}
