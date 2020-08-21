DayOfWeek = (input = 1) => {
    let arrow = ["Monday","Toesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    console.log(arrow[input - 1] || 'Invalid day!');
}
DayOfWeek(8)