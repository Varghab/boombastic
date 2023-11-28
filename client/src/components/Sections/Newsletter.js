import React from 'react'
import newsletter from '../../assets/newsletter.jpg'

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
  <div className="w-full md:w-1/2 mt-4 md:mt-0">
    <h2 className="text-3xl font-primary font-semibold mb-4">Subscribe to Our Newsletter</h2>
    <p className='font-secondary'>
      Stay in the loop with the latest updates, product releases, and exclusive offers from Boombastic. Subscribe to our newsletter and be the first to experience the future of audio.
    </p>

    {/* Newsletter Subscription Form */}
    <form className="mt-4 flex flex-col md:flex-row items-center">
      <input
        type="email"
        placeholder="Your Email Address"
        className="p-2 mb-2 font-secondary md:mb-0 md:mr-2 w-full md:w-64 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-neutral-600 font-secondary duration-150 text-white py-2 px-4 rounded hover:bg-neutral-700 focus:outline-none"
      >
        Subscribe
      </button>
    </form>

    {/* Additional Information */}
    <p className="text-gray-500 mt-2 font-secondary">
      By subscribing, you agree to receive marketing emails from Bombastic. Don't worry, we hate spam too.
    </p>
  </div>
</div>

  )
}

export default Newsletter
