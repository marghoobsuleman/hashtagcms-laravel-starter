/**
 * Created by marghoob.suleman on 8/23/17.
 */

/**
 * MapQuest Api
 * https://developer.mapquest.com
 * Dependency: Need Api
 */

const MAPQUEST_KEY = "NyRN4hQy31NOfiA0Am6VGzG5kZFOhA7z";
const MAPQUEST_URL = "http://www.mapquestapi.com/geocoding/v2/";
const MAPQUEST_JS = "https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js";
const MAPQUEST_CSS = "https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css";


export default class MapAPI {

    constructor() {
        this.callback = [];
        this.isInit = false;
    }

    init() {

        if(this.isInit===false) {
            let $this = this;
            let script = document.createElement("script");
            script.src = MAPQUEST_JS;
            let ele = document.childNodes[0].firstElementChild;
            ele.appendChild(script);

            let css = document.createElement("link");
            css.setAttribute("type", "text/css");
            css.setAttribute("rel", "stylesheet");
            css.href = MAPQUEST_CSS;
            ele.appendChild(css);

            this.isInit = true;
        }
    }

    getLatLong(address, callback=null) {

        let url = MAPQUEST_URL+"address?key="+MAPQUEST_KEY+"&location="+address;

        return new Promise(function (resolve, reject) {
            axios.get(url).then(function (res) {

                resolve(res);

                if(callback!=null && typeof callback == "function") {
                    callback.apply(this, arguments);
                }

            }).catch(function (e) {
                reject(e);

                if(callback!=null && typeof callback == "function") {
                    callback.apply(this, e);
                }
            })
        });

        /*function format(res) {
            let data = [];

            let countryKey = {key:"adminArea1", label:"country"};
            let stateKey = {key:"adminArea3", label:"state"};
            let cityKey = {key:"adminArea5", label:"city"};

            let results = (res.data.results.length == 0 ) ? null : res.data.results[0];

            console.log("results");
            console.log(results);


            if(results != null) {
                let providedLocation = results.providedLocation.location;
                let allLocations = results.locations;

                let keysToStore = ['displayLatLng', 'latLng', 'p    ostalCode', 'sideOfStreet', 'street'];

                allLocations.forEach(function(location, index) {
                    let locationObj = {};
                    locationObj[countryKey.label] = location[countryKey.key];
                    locationObj[stateKey.label] = location[stateKey.key];
                    locationObj[cityKey.label] = location[cityKey.key];

                    keysToStore.forEach(function(key) {
                        locationObj[key] = location[key];
                    });
                    data.push(locationObj);
                });

            }
            return data;

        }*/

    }

}

