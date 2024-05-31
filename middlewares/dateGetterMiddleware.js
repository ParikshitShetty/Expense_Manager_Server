const express = require('express');

// Returns the date in desired format
const getterFormatter = (nextDay) =>{
    const paddedDay = nextDay.getDate().toString().padStart(2, "0");
    const paddedMonth = (nextDay.getMonth() + 1).toString().padStart(2,"0")
    const date = nextDay.getFullYear() + '-' + paddedMonth + '-' + paddedDay;

    return date
}

const dateGetter = async() => {
    const dateObj = new Date();
    const day = new Date(dateObj);

    const nextDay = new Date(day);
    const prevDay = new Date(day);

    nextDay.setDate(day.getDate() + 4);
    prevDay.setDate(day.getDate() - 4);

    // Call the formatter function
    const next = getterFormatter(nextDay);
    const prev = getterFormatter(prevDay);

    return { next, prev }
};

module.exports = dateGetter;