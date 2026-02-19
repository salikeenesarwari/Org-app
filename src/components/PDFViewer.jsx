function PDFViewer({ fileUrl, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1f2937',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}>
        <div style={{ 
          color: 'white',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          📖 Reading Book
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a
            href={fileUrl}
            download
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            ⬇ Download
          </a>
          <button
            onClick={onClose}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}
          >
            ✕ Close
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <iframe
        src={fileUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          backgroundColor: '#525252'
        }}
        title="PDF Viewer"
      />
    </div>
  );
}

export default PDFViewer;
