function getDateFromStamp(timestamp, flag = 1){
    //flag = 1 // time
    //flag = 2 // date
    //flag = 3 // time and date

    const d = new Date(timestamp)
    if(flag === 1){
        return `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    } else if(flag === 2){
        return `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`
    } else if(flag === 3){
        return `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()} ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
    }
}


function timeAgo(timestamp) {
    const now = new Date();
    const diff = Math.floor((now - new Date(timestamp)) / 1000); // difference in seconds

    const seconds = diff % 60;
    const minutes = Math.floor((diff / 60) % 60);
    const hours = Math.floor((diff / 3600) % 24);
    const days = Math.floor(diff / 86400);

    if(days > 0) return ` ${days} days,${hours} hours, ${minutes} minutes, ${seconds} seconds ago`;
        // days + "days" + (days === 1 ? "" : "s") + " ";
    if(hours > 0) return `${hours} hours, ${minutes} minutes, ${seconds} seconds ago`
        // hours + "hours" + (hours === 1 ? "" : "s") + " ";
    if(minutes > 0) return `  ${minutes} minutes, ${seconds} seconds ago`
        //minutes + " minutes" + (minutes  === 1 ? "" : "s") + " ";
    if(seconds >= 0) return ` ${seconds} seconds ago`
        //seconds + " seconds" + (seconds === 1 ? "" : "s") + " ";

   // return ` ${minutes} minutes, ${seconds} seconds ago`;
}
export {getDateFromStamp,timeAgo}