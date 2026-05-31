import getHealthStatus from "../index.js"

describe("getHealthStatus", () => {
    it("выводит 'healthy', если health > 50", () => {
        expect(getHealthStatus({ name: "Маг", health: 90})).toBe("healthy")
    })

    it("выводит 'wounded', если health = 50", () => {
        expect(getHealthStatus({ name: "Маг", health: 50})).toBe("wounded")
    })

    it("выводит 'wounded', если health = 15", () => {
        expect(getHealthStatus({ name: "Маг", health: 15})).toBe("wounded")
    })

    it("выводит 'critical', если health < 15", () => {
        expect(getHealthStatus({ name: "Маг", health: 10})).toBe("critical")
    })
})