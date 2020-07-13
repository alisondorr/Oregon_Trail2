//Oregon Trail Project
//Wagon class has these properties: capacity, and passengers (initialized to an empty array)
class Wagon {
    constructor(capacity, passengers = []) {
        this.capacity = capacity
        this.passengers = passengers
    } //Wagon has these methods: getAvailableSeatCount, join, shouldQuarantine, and totalFood

    //getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)
    }

    //join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
            return (traveler.name + " is now on the wagon")
        }
        return ("Sorry there are no seats on the wagon for " + traveler.name)
    }

    //shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    shouldQuarantine() {
        let quarantine = false
        for (let i = 0; i < this.passengers.length; i++) {
            let currentTraveler = this.passengers[i]

            if (currentTraveler.isHealthy === false) {
                quarantine = true
            }
        }
        return quarantine
    }

    //totalFood() - Returns the total amount of food among all passengers in the wagon.
    totalFood() {
        let totalFood = 0
        for (let i = 0; i < this.passengers.length; i++) {
            let currentTraveler = this.passengers[i]
            totalFood = totalFood + currentTraveler.food
        }
        return totalFood
    }
}

