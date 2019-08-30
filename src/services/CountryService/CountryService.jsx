/**
 * File: CountryService.jsx
 * Author: Jaison Schmidt
 * Description: Class that control all operations over country API and caches operations.
 * Data: 26/09/2019
 */

import Axios from "axios";
import Config from "config";

class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${Config.URL_API}/all/`).then(response => response.data);
  }
}

export default CountryService;
