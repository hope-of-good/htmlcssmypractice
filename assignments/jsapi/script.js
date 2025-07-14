document.addEventListener("DOMContentLoaded", () => {

    class Assign {
        // var cityname, long, lat, weather, temp;
        constructor(a, b, c, d, e, f) {
            console.log(a, b, c, d, e, f);
            this.cityname = b;
            this.long = c;
            this.lat = d;
            this.weather = e;
            this.temp = a;
            this.wispeed = f;
            console.log(this.long, this.lat);

        }
        setcname() {
            document.getElementById("cnamedisplay").innerHTML = this.cityname;
            document.getElementById("wind").innerHTML = this.wispeed;
            document.getElementById("temp").innerHTML = this.temp;
            document.getElementById("latop").innerHTML = this.lat;
            document.getElementById("longop").innerHTML = this.long;
        }
        seticon() {
            let iconFilename = 'ico/sun.png'; // default

            switch (this.weather) {
                case 'clouds':
                    iconFilename = 'Cloud.png';
                    break;
                case 'rain':
                    iconFilename = 'Raining.png';
                    break;
                case 'drizzle':
                    iconFilename = 'drizzle.png';
                    break;
                case 'thunderstorm':
                    iconFilename = 'thunderstorm.png';
                    break;
                case 'snow':
                    iconFilename = 'snow.png';
                    break;
                case 'mist':
                case 'haze':
                case 'fog':
                case 'smoke':
                    iconFilename = 'fog.png';
                    break;
                default:
                    iconFilename = 'sun.png';
            }

            document.getElementById('weathericondisplay')
                .setAttribute('src', `ico/${iconFilename}`);
        }
    }
    const getWeather = () => {

        const txtbox = document.getElementById("txtCityname");
        const cityname = txtbox.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=16a38d83af836c90ee6837bcc746a9d6&units=metric`,)
            .then((res) => res.json())
            .then((data) => {
                const temp = data.main.temp;
                const cityname = data.name;
                const long = data.coord.lon.toFixed(4);
                const latt = data.coord.lat.toFixed(4);
                const weather = data.weather[0].main.toLowerCase();
                const windspeed = data.wind.speed;
                const wreport = new Assign(temp, cityname, long, latt, weather, windspeed);
                wreport.setcname();
                wreport.seticon();

            })
    }

    document.getElementById("gtweather").addEventListener('click', getWeather)

});
