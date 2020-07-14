// The Doctor Class
// The Doctor class will extend the traveler class and have one additional method:

// heal(traveler) - set the traveler's isHealthy property to true.

class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
    }
    heal(traveler) {
        traveler.isHealthy = true
        return (traveler.name + " is healed" + this.isHealthyss)
    }
}