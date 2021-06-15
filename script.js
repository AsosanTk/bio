function CountDays() {
        var starttime = new Date("October 30, 2021 09:30:00");
        var nowtime = new Date();
        var counttime = starttime.getTime() - nowtime.getTime();
        var d = Math.floor(counttime/86400000);
        counttime -= d*86400000;
        var h = Math.floor(counttime/3600000);
        counttime -= h*3600000;
        var m = Math.floor(counttime/60000);
        counttime -= m*60000;
        var s = Math.floor(counttime/1000);
        var dd = ('000' + d).slice(-3);
        var hh = ('00' + h).slice(-2);
        var mm = ('00' + m).slice(-2);
        var ss = ('00' + s).slice(-2);
        $('.countdown-day').text(dd);
        $('.countdown-hour').text(hh);
        $('.countdown-min').text(mm);
        $('.countdown-sec').text(ss);
        setInterval(CountDays, 1000);
    }
CountDays();
