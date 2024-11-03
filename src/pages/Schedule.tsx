import React from 'react';

const scheduleData = {
  Monday: [
    { time: '06:00', class: 'Morning HIIT', trainer: 'John D.' },
    { time: '09:00', class: 'Yoga Flow', trainer: 'Sarah M.' },
    { time: '17:30', class: 'Strength Training', trainer: 'Mike R.' },
    { time: '19:00', class: 'Spin Class', trainer: 'Lisa K.' }
  ],
  Tuesday: [
    { time: '07:00', class: 'CrossFit', trainer: 'Alex P.' },
    { time: '10:00', class: 'Pilates', trainer: 'Emma S.' },
    { time: '16:30', class: 'Boxing', trainer: 'James T.' },
    { time: '18:30', class: 'Zumba', trainer: 'Maria G.' }
  ],
  Wednesday: [
    { time: '06:00', class: 'Morning HIIT', trainer: 'John D.' },
    { time: '09:00', class: 'Yoga Flow', trainer: 'Sarah M.' },
    { time: '17:30', class: 'Strength Training', trainer: 'Mike R.' },
    { time: '19:00', class: 'Spin Class', trainer: 'Lisa K.' }
  ],
  Thursday: [
    { time: '07:00', class: 'CrossFit', trainer: 'Alex P.' },
    { time: '10:00', class: 'Pilates', trainer: 'Emma S.' },
    { time: '16:30', class: 'Boxing', trainer: 'James T.' },
    { time: '18:30', class: 'Zumba', trainer: 'Maria G.' }
  ],
  Friday: [
    { time: '06:00', class: 'Morning HIIT', trainer: 'John D.' },
    { time: '09:00', class: 'Yoga Flow', trainer: 'Sarah M.' },
    { time: '17:30', class: 'Strength Training', trainer: 'Mike R.' },
    { time: '19:00', class: 'Spin Class', trainer: 'Lisa K.' }
  ],
  Saturday: [
    { time: '08:00', class: 'Weekend Warrior', trainer: 'Mike R.' },
    { time: '10:00', class: 'Yoga Flow', trainer: 'Sarah M.' },
    { time: '12:00', class: 'Boxing', trainer: 'James T.' }
  ],
  Sunday: [
    { time: '09:00', class: 'Gentle Yoga', trainer: 'Sarah M.' },
    { time: '11:00', class: 'HIIT', trainer: 'John D.' }
  ]
};

function Schedule() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Class Schedule</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(scheduleData).map(([day, classes]) => (
          <div key={day} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-500 text-white py-3 px-4">
              <h2 className="text-xl font-semibold">{day}</h2>
            </div>
            <div className="p-4">
              {classes.map((classItem, index) => (
                <div
                  key={index}
                  className={index !== 0 ? 'border-t border-gray-200 py-3' : 'py-3'}
                >
                  <div className="font-semibold text-lg">{classItem.time}</div>
                  <div className="text-gray-800">{classItem.class}</div>
                  <div className="text-gray-600 text-sm">with {classItem.trainer}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Want to Join a Class?</h3>
        <p className="text-gray-600 mb-6">
          Book your spot now or contact us for more information about our classes
        </p>
        <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
          Book a Class
        </button>
      </div>
    </div>
  );
}

export default Schedule;