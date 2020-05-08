```js
<ReactTimeslotCalendar
    initialDate = { moment([2017, 3, 24]).format() }
    timeslots = { {
      monday: [['1', '2']], // 1:00 AM - 2:00 AM
      tuesday: [['1', '2']], // 1:00 AM - 2:00 AM
      wednesday: ['5'], // 5:00 AM
      thursday: [['4', '6'],['7', '8']], // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
      friday: [['1', '2']], // 1:00 AM - 2:00 AM
      saturday: [['1', '2']], // 1:00 AM - 2:00 AM
      sunday: [['1', '2']]} // 1:00 AM - 2:00 AM
    }

    onSelectTimeslot={(timeslots, lastSelected) => {
        // Do stuff with timeslots.
        console.log(lastSelected.startDate);
    }}
/>
```
