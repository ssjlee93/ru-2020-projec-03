import axios from "axios";

export default {
    // Gets all users
    getindex: function (country) {
        return axios.get("https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_" + country + "?api_key=x1vEiGNCDZ7dN85mViLU&column_index=3");
    }
};
