interface Timer {
    hour: number;
    min: number;
}

class TimerService
{
    /**
     * @param start
     * @param end 
     * @return Array[Timer]
     * Array with total day hours and total night hours.
     * */
    
    // This method calculate the worked hours at Day and at Night.
    GetWorkedTime(start: Timer, end: Timer): Array<Timer>
    { 
        // Transform hours in minutes
        const startTotalMin = (start.hour * 60) + start.min;
        const endTotalMin = (end.hour * 60) + end.min;

        // Constants
        const $5_HOURS = 5 * 60;
        const $22_HOURS = 22 * 60;
        const $29_HOURS = 29 * 60;  

        let len = endTotalMin;
        
        if (startTotalMin > endTotalMin)
        {
            len += (24 * 60);
        }

        let dayMinutesCounter = 0;
        let nightMinutesCounter = 0;

        for (let min = startTotalMin; min < len; min++)
        {
            if (min >= $5_HOURS && min < $22_HOURS || min >= $29_HOURS)
            {
                dayMinutesCounter++;
            }
            else
            {
                nightMinutesCounter++;
            }
        }

        // Transform worked total minutes in Timer object.
        const TotalDay : Timer = {
            hour: Math.floor(dayMinutesCounter / 60),
            min: dayMinutesCounter % 60
        };
        
        const TotalNight : Timer = {
            hour: Math.floor(nightMinutesCounter / 60),
            min: nightMinutesCounter % 60
        }

        return [TotalDay, TotalNight];
    }

    /**
     * @param start 
     * @param end
     * @returns Timer
     * Timer object with total hours and minutes worked.
     */

    // This method calculate the total worked time at the start until end.
    GetTotalWorkedTime(start: Timer, end: Timer): Timer
    {
        let hour = 0;
        let min = 0;

        if (start.hour < end.hour)
        {
            hour = end.hour - start.hour;
        }
        else
        {
            hour = 24 - (start.hour - end.hour);
        }
        
        if (start.min > 0)
        {
            min = 60 - start.min + end.min;
            hour--;
        }
        else
        {
            min = end.min;
        }

        if (min >= 60)
        {
            min -= 60;
            hour++;
        }

        return { hour, min };
    }
}

export default TimerService;