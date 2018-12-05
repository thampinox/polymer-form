export default class EmployeeApi {
    static get(id) {
        return {
            name: "Matthew",
            position: "Best position ever!",
            eDisposition: ["Temporary", "Permanent", "Contractor"],
            disposition: "Contractor"
        };
    }
}