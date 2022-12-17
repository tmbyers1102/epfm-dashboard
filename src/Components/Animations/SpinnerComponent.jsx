import React from 'react'

const SpinnerComponent = () => {
  return (
    <>
        <div class="flex items-center justify-center">
            <div class="absolute flex right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                <div class="absolute border-y-transparent border-solid animate-spin rounded-full border-blue-50 border-8 h-16 w-16"></div>
                <div class="absolute border-y-transparent border-solid animate-spin rounded-full border-blue-100 border-8 h-20 w-20"></div>
                <div class="absolute border-y-transparent border-solid animate-spin rounded-full border-blue-200 border-8 h-24 w-24"></div>
                <div class="border-y-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-28 w-28"></div>
                <div class="absolute border-y-transparent border-solid animate-spin rounded-full border-blue-600 border-8 h-32 w-32"></div>
            </div>
        </div>
    </>
  )
}

export default SpinnerComponent