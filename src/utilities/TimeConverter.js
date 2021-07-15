export const timeConverter = (unix_time)=>{
    let a = new Date(unix_time * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let time = a.getDate() + ' ' + month + ' ' + year + ' ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() ;
    return time;
  }