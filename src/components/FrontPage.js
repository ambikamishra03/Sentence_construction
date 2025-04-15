import React from 'react'

const FrontPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Sentence Construction</h1>
        <h3 className="text-lg text-gray-700 max-w-xl mx-auto">
          User has to construct a sentence with random words by placing them in the correct order.
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 text-center">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Time per question</h3>
          <p className="text-lg text-gray-600">1 min</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Total questions</h3>
          <p className="text-lg text-gray-600">5</p>
        </div>
      </div>

      <button 
      className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md text-lg font-medium"
        
      >
        Start
      </button>
    </div>
  )
}

export default FrontPage
