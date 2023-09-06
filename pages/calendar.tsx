import Calendar from "@components/Calendar/Calendar";
import Topbar from "@components/Topbar/Topbar";
import Link from "next/link";

function CalendarPage(){
    return  <>
        <Topbar></Topbar>
        <div className="px-1">
        <Calendar></Calendar>
        </div>
    </>
    
}

export default CalendarPage