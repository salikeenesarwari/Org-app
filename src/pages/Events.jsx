import { useState } from 'react';
import { events, monthlyScheduleNotes } from '../data/events';

function Events() {
  const [selectedCategory, setSelectedCategory] = useState('Upcoming Events');
  
  const categories = [
    'Upcoming Events',
    'Annual Celebrations',
    'Community Services',
    'Educational Programs',
    'Monthly Schedule'
  ];

  const getFilteredEvents = () => {
    return events.filter(event => event.category === selectedCategory);
  };

  const filteredEvents = getFilteredEvents();

  const EventCard = ({ event }) => (
    <div className="card">
      <img 
        src={event.image} 
        alt={event.title}
        className="card-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x200/48906e/ffffff?text=Event+Image';
        }}
      />
      <div className="card-content">
        {event.dayLabel && (
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 0.75rem',
            backgroundColor: '#48906e',
            color: 'white',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '700',
            marginBottom: '0.75rem',
            minWidth: '50px',
            textAlign: 'center'
          }}>
            {event.dayLabel}
          </div>
        )}
        
        {event.badge && !event.dayLabel && (
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            backgroundColor: '#10b981',
            color: 'white',
            borderRadius: '15px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '0.75rem'
          }}>
            {event.badge}
          </div>
        )}
        
        {event.subtitle && (
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            backgroundColor: '#e0f2fe',
            color: '#0369a1',
            borderRadius: '12px',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '0.75rem',
            marginLeft: event.dayLabel ? '0.5rem' : '0'
          }}>
            {event.subtitle}
          </div>
        )}
        
        <h3 className="card-title">{event.title}</h3>
        
        <p className="card-text">{event.description}</p>
        
        {event.tags && (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginTop: '1rem'
          }}>
            {event.tags.map((tag, index) => (
              <span key={index} style={{
                padding: '0.375rem 0.75rem',
                backgroundColor: '#f0fdf4',
                color: '#166534',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: '1px solid #bbf7d0'
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {event.additionalInfo && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: '#eff6ff',
            borderRadius: '6px',
            color: '#1e40af',
            fontSize: '0.9rem',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            {event.additionalInfo}
          </div>
        )}
        
        {event.expectations && (
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.5rem'
            }}>
              What to Expect:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {event.expectations.map((item, index) => (
                <li key={index} style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  marginBottom: '0.5rem',
                  color: '#4b5563',
                  fontSize: '0.9rem'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#10b981'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {event.activities && (
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.5rem'
            }}>
              Activities Include:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {event.activities.map((item, index) => (
                <li key={index} style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  marginBottom: '0.5rem',
                  color: '#4b5563',
                  fontSize: '0.9rem'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#10b981'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {event.servicesProvided && (
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.5rem'
            }}>
              Services Provided:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {event.servicesProvided.map((item, index) => (
                <li key={index} style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  marginBottom: '0.5rem',
                  color: '#4b5563',
                  fontSize: '0.9rem'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#10b981'
                  }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {event.impact && (
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.5rem'
            }}>
              Impact:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {event.impact.map((item, index) => (
                <li key={index} style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  marginBottom: '0.5rem',
                  color: '#4b5563',
                  fontSize: '0.9rem'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#10b981'
                  }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {event.programFeatures && (
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.5rem'
            }}>
              Program Features:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {event.programFeatures.map((item, index) => (
                <li key={index} style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  marginBottom: '0.5rem',
                  color: '#4b5563',
                  fontSize: '0.9rem'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#10b981'
                  }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {event.distribution && (
          <div style={{ marginTop: '1rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.5rem'
            }}>
              Distribution:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {event.distribution.map((item, index) => (
                <li key={index} style={{
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  marginBottom: '0.5rem',
                  color: '#4b5563',
                  fontSize: '0.9rem'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#10b981'
                  }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {event.stats && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#f0fdf4',
            borderRadius: '8px'
          }}>
            {event.stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  color: '#48906e',
                  marginBottom: '0.25rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {event.note && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#fef3c7',
            borderLeft: '4px solid #f59e0b',
            borderRadius: '4px'
          }}>
            <p style={{
              margin: 0,
              fontSize: '0.9rem',
              color: '#78350f'
            }}>
              <strong>Note:</strong> {event.note}
            </p>
          </div>
        )}
        
        {(event.quranStudies || event.islamicSciences || event.spiritualDevelopment) && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            {event.quranStudies && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#48906e',
                  marginBottom: '0.75rem'
                }}>
                  📖 Quran Studies
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {event.quranStudies.map((item, index) => (
                    <li key={index} style={{
                      paddingLeft: '1rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      color: '#4b5563',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#10b981'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {event.islamicSciences && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#48906e',
                  marginBottom: '0.75rem'
                }}>
                  📚 Islamic Sciences
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {event.islamicSciences.map((item, index) => (
                    <li key={index} style={{
                      paddingLeft: '1rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      color: '#4b5563',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#10b981'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {event.spiritualDevelopment && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#48906e',
                  marginBottom: '0.75rem'
                }}>
                  🌟 Spiritual Development
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {event.spiritualDevelopment.map((item, index) => (
                    <li key={index} style={{
                      paddingLeft: '1rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      color: '#4b5563',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#10b981'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {event.schedule && (
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.75rem'
            }}>
              Schedule:
            </h4>
            {event.schedule.map((item, index) => (
              <div key={index} style={{
                marginBottom: '0.5rem',
                color: '#4b5563',
                fontSize: '0.9rem'
              }}>
                <strong style={{ color: '#48906e' }}>{item.label}:</strong> {item.time}
              </div>
            ))}
          </div>
        )}
        
        {(event.basicLevel || event.advancedLevel || event.entrepreneurship) && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            {event.basicLevel && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#eff6ff',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e40af',
                  marginBottom: '0.75rem'
                }}>
                  Basic Level
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {event.basicLevel.map((item, index) => (
                    <li key={index} style={{
                      paddingLeft: '1rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      color: '#4b5563',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#3b82f6'
                      }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {event.advancedLevel && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#fefce8',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#a16207',
                  marginBottom: '0.75rem'
                }}>
                  Advanced Level
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {event.advancedLevel.map((item, index) => (
                    <li key={index} style={{
                      paddingLeft: '1rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      color: '#4b5563',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#eab308'
                      }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {event.entrepreneurship && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#991b1b',
                  marginBottom: '0.75rem'
                }}>
                  Entrepreneurship
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {event.entrepreneurship.map((item, index) => (
                    <li key={index} style={{
                      paddingLeft: '1rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                      color: '#4b5563',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#ef4444'
                      }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {event.specialFeatures && (
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#48906e',
              marginBottom: '0.75rem'
            }}>
              Special Features:
            </h4>
            <div style={{
              display: 'grid',
              gap: '0.5rem'
            }}>
              {event.specialFeatures.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem',
                  backgroundColor: '#fef3c7',
                  borderRadius: '6px'
                }}>
                  <span style={{ color: '#f59e0b', fontSize: '1.25rem' }}>🎯</span>
                  <span style={{ color: '#78350f', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {event.features && (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginTop: '1rem',
            marginBottom: '0.75rem'
          }}>
            {event.features.map((feature, index) => (
              <span key={index} style={{
                padding: '0.375rem 0.75rem',
                backgroundColor: '#e0f2fe',
                color: '#0369a1',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {feature}
              </span>
            ))}
          </div>
        )}
        
        <div style={{
          display: 'grid',
          gap: '0.5rem',
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f9fafb',
          borderRadius: '8px'
        }}>
          <p className="card-meta">
            {event.location.toLowerCase().includes('online') || event.location.toLowerCase().includes('google meet') || event.location.toLowerCase().includes('virtual') ? '💻' : '📍'} {event.location}
          </p>
          {event.day && <p className="card-meta">🗓️ {event.day}</p>}
          {event.platform && <p className="card-meta">💻 {event.platform}</p>}
          {event.time && <p className="card-meta">🕐 {event.time}</p>}
          {event.frequency && <p className="card-meta">🔄 {event.frequency}</p>}
          {event.duration && <p className="card-meta">⏱️ {event.duration}</p>}
        </div>
        
        {event.meetingLink && (
          <a 
            href={event.meetingLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
            style={{
              backgroundColor: '#10b981',
              marginTop: '1rem',
              display: 'inline-block'
            }}
          >
            Join Meeting
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="page">
      {/* Events Header Section */}
      <div style={{
        backgroundColor: '#48906e',
        padding: '3rem 0',
        marginTop: '-2rem',
        marginBottom: '2rem'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Events & Activities
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'white',
            textAlign: 'center',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            Spiritual Gatherings, Community Services, and Educational Programs
          </p>
          
          {/* Category Filter Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  border: selectedCategory === category ? '2px solid #f59e0b' : '2px solid rgba(255,255,255,0.5)',
                  backgroundColor: selectedCategory === category ? '#f59e0b' : 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {filteredEvents.length > 0 ? (
          <>
            <div className="card-grid">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            
            {selectedCategory === 'Monthly Schedule' && monthlyScheduleNotes && (
              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                backgroundColor: '#f9fafb',
                borderRadius: '12px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#48906e',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      📌 Important Notes:
                    </h3>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {monthlyScheduleNotes.importantNotes.map((note, index) => (
                        <li key={index} style={{
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          marginBottom: '0.75rem',
                          color: '#4b5563',
                          fontSize: '0.95rem',
                          lineHeight: '1.5'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#10b981'
                          }}>•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#48906e',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      ✨ Benefits of Regular Attendance:
                    </h3>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {monthlyScheduleNotes.benefits.map((benefit, index) => (
                        <li key={index} style={{
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          marginBottom: '0.75rem',
                          color: '#4b5563',
                          fontSize: '0.95rem',
                          lineHeight: '1.5'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#f59e0b'
                          }}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.125rem', padding: '2rem' }}>
            No events found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Events;
