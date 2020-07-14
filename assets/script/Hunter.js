// The Hunter Class
// The Hunter class will extend the traveler class, but it will start with 2 food instead of 1. 
//The Hunter class should also have the following methods:

// giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits from the hunter to the traveler. If the hunter doesn't have enough food, then no food should be transferred.

class Hunter extends Traveler {
    constructor(name, food = 2, isHealthy) {
        super(name, food, isHealthy)
    }
    // hunt() - Increase the hunter's food by 5(A normal traveler gains only 2.)
    hunt() {
        this.food = this.food + 5
    }
    // eat() - Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
    eat() {
        if (this.food <= 1) {
            this.isHealthy = false
            this.food = 0
        } else {
            this.food = this.food - 2
        }
        return (this)
    }
    giveFood(traveler, numOfFoodUnits) {
        if (traveler.food < numOfFoodUnits) {
            return ("Sorry not enough food to share")
        } else {
            traveler.food = traveler.food + numOfFoodUnits
            this.food = this.food - numOfFoodUnits
        }
    }
}