async function getDate(){
    var data = await fetch('https://cors.io/?http://worldtimeapi.org/api/timezone/America/Fortaleza');
    return data.json();
   
}

async function accessDateTime(){
    var data = await getDate();
        var date_time = data.datetime.split("T");
        //2018-12-25T14:36:00.376330-03:00
        //console.log(date_time);
        var date = date_time[0].split("-");
        var day = date[2];
        var month = date[1];
        var year = date[0];
        
        var time = date_time[1].split(".");
        var timeSplited = time[0].split(":");
        var hour = timeSplited[0];
        var minutes = timeSplited[1];
        var seconds = timeSplited[2];
        
        function getDay(){
            console.log("dia "+ day);
            return day;
        }

        function getMonth(){
            console.log("mes "+ month);
            return month;
        }

        function getYear(){
            console.log("ano "+ year);
            return year;
        }

        function getTime(){
            console.log("Horas: "+ time);
            return time;
        }

        function getHour(){
            console.log("Hora: "+ hour);
            return hour;
        }

        function getMinutes(){
            console.log("Minutos: "+ minutes);
            return minutes;
        }

        function getSeconds(){
            console.log("Hora: "+ seconds);
            return seconds;
        }
}