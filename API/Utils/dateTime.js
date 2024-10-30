const moment = require('moment');

const newdatetime = (getDateTime) => {
    const originalDateTime = moment(getDateTime);
    originalDateTime.hours(0);
    originalDateTime.minutes(0);
    originalDateTime.seconds(0);
    originalDateTime.milliseconds(0); 
    const formattedDateTime = originalDateTime.add(5,'hours').add(30,'minutes')  ;
    const newDate = new Date(formattedDateTime);
    // console.log("newdatetime: ", newDate);
    return newDate;
};

const now =()=> {
    const originalDateTime = moment(Date.now());
    const formattedDateTime = originalDateTime.add(5,'hours').add(30,'minutes')  ;
    const newDate = new Date(formattedDateTime);
    return newDate;
}

const actualdatetime = (getDateTime) => {
    const originalDateTime = moment(getDateTime);
    const formattedDateTime = originalDateTime.add(5,'hours').add(30,'minutes')  ;
    const newDate = new Date(formattedDateTime);
    return newDate;
};

const newDateController = (getDateTime) => {
    // Convert getDateTime to a format recognized by moment (ISO 8601 recommended)
    const isoFormattedDateTime = moment(getDateTime, 'D MMMM YYYY').format('YYYY-MM-DD');

    // Now pass the ISO formatted date string to moment
    const originalDateTime = moment(isoFormattedDateTime);

    originalDateTime.hours(0);
    originalDateTime.minutes(0);
    originalDateTime.seconds(0);
    originalDateTime.milliseconds(0);

    // Adjust the time as needed
    const formattedDateTime = originalDateTime.add(5, 'hours').add(30, 'minutes');
    
    // Convert the moment object back to a JavaScript Date object
    const newDate = new Date(formattedDateTime.format());

    // console.log("newdatetime: ", newDate);
    return newDate;
};

module.exports = { newdatetime,now,actualdatetime, newDateController };
