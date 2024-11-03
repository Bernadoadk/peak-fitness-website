import React, { useState } from 'react';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Class Calendar</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ←
          </button>
          <h2 className="text-xl font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {[...Array(firstDayOfMonth)].map((_, index) => (
            <div key={`empty-${index}`} className="h-24 bg-gray-50 rounded-lg"></div>
          ))}
          
          {[...Array(daysInMonth)].map((_, index) => (
            <div
              key={index + 1}
              className="h-24 border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors"
            >
              <div className="font-semibold mb-1">{index + 1}</div>
              {/* Example class schedules - you can make this dynamic */}
              {index % 3 === 0 && (
                <div className="text-xs bg-red-100 text-red-800 rounded p-1 mb-1">
                  HIIT 9:00 AM
                </div>
              )}
              {index % 4 === 0 && (
                <div className="text-xs bg-blue-100 text-blue-800 rounded p-1">
                  Yoga 5:30 PM
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;