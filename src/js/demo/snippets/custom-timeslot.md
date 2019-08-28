```js
<ReactTimeslotCalendar
    currentDate = { moment([2019, 4, 1]).format() }
    initialDate = { moment([2019, 3, 24]).format() }
    timeslots = { [
        ['9', '10'],
        ['10', '11'],
        ['18'],
    ] }

    onSelectTimeslot={(timeslots, lastSelected) => {
        // Do stuff with timeslots.
        console.log(lastSelected.startDate);
    }}
/>
```
