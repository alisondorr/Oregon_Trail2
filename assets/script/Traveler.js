//Traveler class has these properties: name, food (initialized to 1), isHealthy (initialized to true)
class Traveler {
    constructor(name, food = 1, isHealthy = true) {
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }
    //Traveler has these methods: hunt, and eat
    //hunt() – Increases the traveler's food by 2
    hunt() {
        this.food = this.food + 2
    }
    //eat() – Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
        } else {
            this.food = this.food - 1
        }
        return (this)
    }
}