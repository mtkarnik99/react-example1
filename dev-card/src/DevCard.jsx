// src/DevCard.jsx
const skills = ['React', 'Node.js', 'CSS'];
const isAvailable = true;

function DevCard() {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, width: 260 }}>
       <h2>Alex Rivera</h2>
        <p>Full Stack Developer</p> 
      {isAvailable && <p style={{ color: 'green' }}>Open to work</p>}
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default DevCard;