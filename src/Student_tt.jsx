import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your timetable images
import class2Image from './assets/class_2tt.png';
import class1Image from './assets/class_1tt.png';
import class3Image from './assets/class_3tt.png';
import class4Image from './assets/class4_tt.png';
import class5Image from './assets/class_5tt.png';
import class6Image from './assets/class_6tt.png';
import class7Image from './assets/class_7tt.png';
import class8Image from './assets/class8_tt.png';
import class9Image from './assets/class_9tt.png';
import class10Image from './assets/class_10tt.png';

function Timetable() {
  const [classNumber, setClassNumber] = useState(1);

  const handleClassNumberChange = (e) => {
    const newClassNumber = parseInt(e.target.value, 10);
    setClassNumber(newClassNumber);
  };

  const getClassImage = (number) => {
    // Map class numbers to corresponding image paths
    const classImageMap = {
      1: class1Image,
      2: class2Image,
      3: class3Image,
      4: class4Image,
      5: class5Image,
      6: class6Image,
      7: class7Image,
      8: class8Image,
      9: class9Image,
      10: class10Image,
      // Add similar mappings for other classes
    };

    return classImageMap[number] || null;
  };

  const timetableImage = getClassImage(classNumber);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ backgroundColor: '#5bc0de', padding: '10px', color: '#fff', borderRadius: '5px' }}>
        Timetable for Class {classNumber}
      </h2>

      <label htmlFor="classNumber">Enter Class Number:</label>
      <input
        type="number"
        id="classNumber"
        value={classNumber}
        onChange={handleClassNumberChange}
      />
      <br />

      {timetableImage ? (
        <div>
          <img
            src={timetableImage}
            alt={`Timetable for Class ${classNumber}`}
            style={{ maxWidth: '100%', margin: '20px auto' }}
          />
        </div>
      ) : (
        <p>No timetable available for Class {classNumber}</p>
      )}

      {/* Back to Dashboard Button */}
      <Link
        to="/Studentdashboard"
        style={{
          display: 'inline-block',
          margin: '20px auto',
          backgroundColor: '#5bc0de',
          padding: '10px 15px',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default Timetable;
