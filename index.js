class Driver {
  constructor (name, joined) {
    this.name = name;
    this.joined = joined;
  }

  startDate() {
    return new Date(this.joined)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return new Date (endDate) - new Date(this.joined)
  }
}
