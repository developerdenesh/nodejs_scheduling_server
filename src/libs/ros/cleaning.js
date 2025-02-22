const path = require("path");
const axios = require("axios");

let url = path.join(process.env.API_URL, "start_process");
let response = {};
let success = false;

const cleaning = async (cleaning_plan) => {
    let request = {
        "api_key": process.env.API_KEY,
        "robot_name": process.env.ROBOT_NAME,
        "process": cleaning_plan,
        "order": "combined"
    };

    try {
        response = await axios.post(url, request);

        success = response.data.success;
    }
    catch (error) {
        console.log(error);
    }

    return success;
}

module.exports = cleaning;