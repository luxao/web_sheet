import React from 'react';

export default function HtmlCard({ htmlContent }) {
    return <div className="card-wrap">
      <pre className='pre-code'>
            <code className='code-el'>{ htmlContent}</code>
      </pre>
    </div>
}