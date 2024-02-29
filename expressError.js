// This file contains the code for ExpressError class.
// 'class ExpressError' creates an instance of an error with a status
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}
// Export the class
module.exports = ExpressError;
