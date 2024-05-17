import React from 'react';

export default function HtmlCard({ htmlContent }) {
    return <div className="w-72 h-72 border border-gray-300 rounded-lg overflow-auto p-4 bg-gray-50">
      <pre>
            <code>{ htmlContent}</code>
      </pre>
    </div>
}