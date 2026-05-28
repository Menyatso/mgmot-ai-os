export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px',
        background: '#050816',
        color: 'white'
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          marginBottom: '10px',
          color: '#00C2FF'
        }}
      >
        MGMOT AI OS
      </h1>

      <p
        style={{
          fontSize: '18px',
          color: '#B8C5D6'
        }}
      >

        Build your own AI-powered company without needing a technical team.
      </p>

      <div
        style={{
          marginTop: '40px',
          padding: '30px',
          background: '#0B1220',
          borderRadius: '20px',
          border: '1px solid #1F2A44'
        }}
      >
        <h2
          style={{
            color: '#00C2FF'
          }}
        >
          Founder Dashboard
        </h2>

        <p>AI Departments Active:</p>

        
<ul
          style={{
            lineHeight: '2'
          }}
        >
          <li>AI Marketing Lead</li>
          <li>AI Software Engineer</li>
          <li>AI Operations Manager</li>
          <li>AI Designer</li>
        </ul>

        <button
          style={{
            marginTop: '20px',
            padding: '14px 24px',
            borderRadius: '12px',
            border: 'none',
            background: '#00C2FF',
            color: 'black',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Start Building
        </button>
      </div>
</div>
  )
}
    
