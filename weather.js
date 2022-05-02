
        // https://api.openweathermap.org/data/2.5/weather?q=phulbani&appid=fa023a3af5e98520bc0ec18c3831a2dd

        function clerar() {
            var city = document.getElementById("city").value
            console.log(city)
            if (city != "") {
                var city = document.getElementById("city")
                city.value = ""
                var displaydiv = document.getElementById("displaydiv")
                displaydiv.innerHTML = ""

             
            }
        }

        function weather() {

            var city = document.getElementById("city").value
            // console.log(city)
            // var key= fa023a3af5e98520bc0ec18c3831a2dd
            async function getdata() {


                try {

                    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa023a3af5e98520bc0ec18c3831a2dd`)
                    let data = await res.json()
                    // console.log(data)
                   await display(data)
                } catch (error) {
                    var er=document.createElement("h1")
                    er.textContent="The city is not found"
                    displaydiv.append(er)
                }

            }
            getdata()
            function display(data) {
                var weather = document.getElementById("weather")
                // (temp, pressure, humidity, wind speed, sunrise, sunset, weather description)

                var city = document.getElementById("city").value
                var displaydiv = document.getElementById("displaydiv")
                var min_temp = document.createElement("h3")
                var tempIn_cel=Math.floor(data.main.temp_min-273.15);
                var tempin_far=Math.floor(((data.main.temp_min-273.15)*9/5)+32)
                min_temp.textContent = "Temp:" + tempIn_cel+"°C"+"  |  "+tempin_far+"°F";
                var pressure = document.createElement("h3")

                pressure.textContent = "Pressure:" + data.main.pressure+"hPa";

                var humidity = document.createElement("h3")
                humidity.textContent = "Humidity:" + data.main.humidity+"%";

                var windspeed = document.createElement("h3")
                var sectohr=Math.floor(data.wind.speed*3.6)
                windspeed.textContent = "Wind speed:-" + sectohr +"km/hr"

                   var unixTimestamp = data.sys.sunrise

                    var milliseconds = unixTimestamp * 1000 // 1575909015000

                    var dateObject = new Date(milliseconds)

                    var humanDateFormat = dateObject.toLocaleString()
                var sunrise = document.createElement("h3")
                sunrise.textContent = "Sunrise:-" + humanDateFormat

               var unixsunset=data.sys.sunset
               var milINsunset=unixsunset*1000
               var to_obj= new Date(milINsunset)
               var act_sunset=to_obj.toLocaleString()
               var sunset = document.createElement("h3")
               sunset.textContent = "Sunset:-" + act_sunset
               var dec = document.createElement("h3")
               dec.textContent = "Weather Description:-" + data.weather[0].description

                displaydiv.append(min_temp, pressure, humidity, windspeed,sunrise,sunset,dec)


            }


        }        