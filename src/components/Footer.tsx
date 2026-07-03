<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
  {/* LinkedIn Link */}
  <a 
    href="https://linkedin.com/in/YOUR_PROFILE" 
    target="_blank" rel="noopener noreferrer"
    style={{ color: T.muted, fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
    onMouseLeave={(e) => e.currentTarget.style.color = T.muted}
  >
    LinkedIn
  </a>

  {/* Корпоративный Email вместо Telegram */}
  <a 
    href="mailto:hi@tsvetkov.site" 
    style={{ color: T.muted, fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
    onMouseLeave={(e) => e.currentTarget.style.color = T.muted}
  >
    hi@tsvetkov.site
  </a>
</div>
