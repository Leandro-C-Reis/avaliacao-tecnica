import { Request, Response } from 'express';
import DayValidator from '../helper/validator';
import TimerService from '../service/Timer';

class TimerController {

    /**
     * 
     * @param request 
     * @param response 
     */

    // Validate body request, get worked hours and returns it
    Parse(request: Request, response: Response) {
        
        // Validate body format
        const validate = DayValidator.validate(request.body);

        if (validate.error) {
            return response.status(200).json(validate);
        }

        // Call timer service and calculate worked hours
        const timer = new TimerService();

        const { start, end } = validate.value;

        const worked_hours = timer.GetWorkedTime(start, end);

        return response.status(200).json(worked_hours);
    }
}

export default TimerController;